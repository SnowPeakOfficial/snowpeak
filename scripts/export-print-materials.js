#!/usr/bin/env node

/**
 * Export Print Materials - Business Cards & Flyer
 * 
 * This script uses Puppeteer to generate high-quality print-ready files:
 * - Business cards (front & back) at 300 DPI
 * - Flyer at 300 DPI
 * - Combined PDFs for easy printing
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '../print-ready');
const PUBLIC_DIR = path.join(__dirname, '../public');
const DPI = 300;

// Print dimensions (in inches)
const DIMENSIONS = {
  businessCard: {
    width: 3.5,
    height: 2,
    pixelWidth: 3.5 * DPI,
    pixelHeight: 2 * DPI
  },
  flyer: {
    width: 8.5,
    height: 11,
    pixelWidth: 8.5 * DPI,
    pixelHeight: 11 * DPI
  }
};

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Export business card (front and back)
 */
async function exportBusinessCard(browser) {
  console.log('\n📇 Exporting Business Card...');
  
  const page = await browser.newPage();
  
  // Set viewport to business card dimensions at 300 DPI
  await page.setViewport({
    width: DIMENSIONS.businessCard.pixelWidth,
    height: DIMENSIONS.businessCard.pixelHeight,
    deviceScaleFactor: 5
  });

  // Load the business card HTML
  const businessCardPath = `file://${path.join(PUBLIC_DIR, 'business-card.html')}`;
  await page.goto(businessCardPath, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Export front side
  console.log('  📄 Capturing front side...');
  const frontElement = await page.$('.card-front');
  if (frontElement) {
    await frontElement.screenshot({
      path: path.join(OUTPUT_DIR, 'business-card-front.png'),
      omitBackground: false
    });
    console.log('  ✅ Front side saved: business-card-front.png');
  }

  // Export back side
  console.log('  📄 Capturing back side...');
  const backElement = await page.$('.card-back');
  if (backElement) {
    await backElement.screenshot({
      path: path.join(OUTPUT_DIR, 'business-card-back.png'),
      omitBackground: false
    });
    console.log('  ✅ Back side saved: business-card-back.png');
  }

  // Create combined PDF
  console.log('  📄 Creating combined PDF...');
  await page.pdf({
    path: path.join(OUTPUT_DIR, 'business-card.pdf'),
    width: `${DIMENSIONS.businessCard.width}in`,
    height: `${DIMENSIONS.businessCard.height}in`,
    printBackground: true,
    preferCSSPageSize: false
  });
  console.log('  ✅ PDF saved: business-card.pdf');

  await page.close();
}

/**
 * Export flyer
 */
async function exportFlyer(browser) {
  console.log('\n📄 Exporting Flyer...');
  
  const page = await browser.newPage();
  
  // Set viewport to flyer dimensions at 300 DPI
  await page.setViewport({
    width: DIMENSIONS.flyer.pixelWidth,
    height: DIMENSIONS.flyer.pixelHeight,
    deviceScaleFactor: 3
  });

  // Load the flyer HTML
  const flyerPath = `file://${path.join(PUBLIC_DIR, 'flyer.html')}`;
  await page.goto(flyerPath, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Export flyer element only (no white space)
  console.log('  📄 Capturing flyer...');
  const flyerElement = await page.$('.flyer');
  if (flyerElement) {
    await flyerElement.screenshot({
      path: path.join(OUTPUT_DIR, 'flyer.png'),
      omitBackground: false
    });
    console.log('  ✅ PNG saved: flyer.png');
  }

  // Create PDF
  console.log('  📄 Creating PDF...');
  await page.pdf({
    path: path.join(OUTPUT_DIR, 'flyer.pdf'),
    format: 'Letter',
    printBackground: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
  console.log('  ✅ PDF saved: flyer.pdf');

  await page.close();
}

/**
 * Main export function
 */
async function main() {
  console.log('🖨️  Starting Print Materials Export...');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`🎯 Resolution: ${DPI} DPI (professional print quality)\n`);

  let browser;
  
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Determine what to export based on command line argument
    const args = process.argv.slice(2);
    const exportType = args[0] || 'all';

    if (exportType === 'business-card' || exportType === 'all') {
      await exportBusinessCard(browser);
    }

    if (exportType === 'flyer' || exportType === 'all') {
      await exportFlyer(browser);
    }

    console.log('\n✨ Export complete!');
    console.log(`📂 Files saved to: ${OUTPUT_DIR}\n`);
    console.log('Files ready for professional printing at Staples, VistaPrint, or any print service! 🎉\n');

  } catch (error) {
    console.error('\n❌ Error during export:', error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the export
main();
