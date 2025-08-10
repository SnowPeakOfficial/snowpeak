import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  projectType: z.string().optional().default(''),
  budget: z.string().optional().default(''),
  timeline: z.string().optional().default(''),
  description: z.string().min(10).max(5000),
  turnstileToken: z.string().min(10),
});

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  const form = new URLSearchParams();
  form.append('secret', secret);
  form.append('response', token);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: form.toString(),
    });
    const data = await res.json();
    return !!data?.success;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', issues: parsed.error.flatten() }, { status: 400 });
  }

  const { turnstileToken, ...data } = parsed.data;

  const captchaOk = await verifyTurnstile(turnstileToken);
  if (!captchaOk) {
    return NextResponse.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'contact@snowpeak.ca';

  if (!resendApiKey || !toEmail) {
    return NextResponse.json({ error: 'Email not configured' }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  const subject = `New inquiry from ${data.name}`;
  const html = `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.projectType ? `<p><strong>Project Type:</strong> ${data.projectType}</p>` : ''}
    ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
    ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
    <p><strong>Description:</strong></p>
    <pre style="white-space:pre-wrap; font-family:inherit">${data.description}</pre>
  `;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      reply_to: data.email,
      html,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}


