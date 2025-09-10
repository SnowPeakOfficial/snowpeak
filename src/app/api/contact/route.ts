import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  projectType: z.string().optional().default(''),
  budget: z.string().optional().default(''),
  timeline: z.string().optional().default(''),
  description: z.string().min(5).max(5000),
});

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

  const data = parsed.data;

  // Get environment variables
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'turtles2149@gmail.com';

  if (!gmailUser || !gmailPassword) {
    return NextResponse.json({ error: 'Email configuration missing' }, { status: 500 });
  }

  // Create Gmail SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  // Email content
  const subject = `New Contact Form Submission from ${data.name}`;
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      </div>

      ${data.projectType || data.budget || data.timeline ? `
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #007bff; margin-top: 0;">Project Details</h3>
        ${data.projectType ? `<p><strong>Project Type:</strong> ${data.projectType}</p>` : ''}
        ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ''}
        ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
      </div>
      ` : ''}

      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #007bff; margin-top: 0;">Project Description</h3>
        <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
          <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${data.description}</pre>
        </div>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
        <p>This message was sent from the SnowPeak contact form.</p>
        <p>Submitted on: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;

  const textContent = `
New Contact Form Submission

Contact Information:
Name: ${data.name}
Email: ${data.email}

${data.projectType ? `Project Type: ${data.projectType}\n` : ''}${data.budget ? `Budget Range: ${data.budget}\n` : ''}${data.timeline ? `Timeline: ${data.timeline}\n` : ''}
Project Description:
${data.description}

---
This message was sent from the SnowPeak contact form.
Submitted on: ${new Date().toLocaleString()}
  `;

  try {
    await transporter.sendMail({
      from: `"SnowPeak Contact Form" <${gmailUser}>`,
      to: toEmail,
      replyTo: data.email,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
