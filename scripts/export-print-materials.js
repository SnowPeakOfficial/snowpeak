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
const sharp = require('sharp');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '../print-ready');
const PUBLIC_DIR = path.join(__dirname, '../public');
const DPI = 600;

// Print dimensions (in inches)
const DIMENSIONS = {
  businessCard: {
    width: 3.75,  // With bleed for Staples/Canva (trims to 3.5")
    height: 2.25, // With bleed for Staples/Canva (trims to 2")
    pixelWidth: 3.75 * DPI,
    pixelHeight: 2.25 * DPI
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
 * Add DPI metadata to PNG file using Sharp
 */
async function addDpiMetadata(filePath) {
  const buffer = await sharp(filePath)
    .withMetadata({
      density: DPI
    })
    .toBuffer();
  
  await fs.promises.writeFile(filePath, buffer);
  console.log(`  🎯 DPI metadata set to ${DPI}`);
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
    deviceScaleFactor: 10  // Ultra-high quality for crystal-clear text
  });

  // Load the business card HTML
  const businessCardPath = `file://${path.join(PUBLIC_DIR, 'business-card.html')}`;
  await page.goto(businessCardPath, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Export front side PNG
  console.log('  📄 Capturing front side PNG...');
  const frontElement = await page.$('.card-front');
  const frontPath = path.join(OUTPUT_DIR, 'business-card-front.png');
  if (frontElement) {
    await frontElement.screenshot({
      path: frontPath,
      omitBackground: false
    });
    console.log('  ✅ Front PNG saved: business-card-front.png');
    await addDpiMetadata(frontPath);
  }

  // Export back side PNG
  console.log('  📄 Capturing back side PNG...');
  const backElement = await page.$('.card-back');
  const backPath = path.join(OUTPUT_DIR, 'business-card-back.png');
  if (backElement) {
    await backElement.screenshot({
      path: backPath,
      omitBackground: false
    });
    console.log('  ✅ Back PNG saved: business-card-back.png');
    await addDpiMetadata(backPath);
  }

  // Export front side PDF (element only, no white space)
  console.log('  📄 Creating front side PDF...');
  await page.evaluate(() => {
    // Remove all body styling and make it fit the card exactly
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.background = 'transparent';
    document.body.style.width = '3.75in';
    document.body.style.height = '2.25in';
    document.body.style.overflow = 'hidden';
    
    // Hide everything except front card
    const instructions = document.querySelectorAll('.instructions');
    const labels = document.querySelectorAll('.card-label');
    instructions.forEach(el => el.remove());
    labels.forEach(el => el.remove());
    
    // Hide back card
    const backCard = document.querySelector('.card-back');
    if (backCard && backCard.parentElement) {
      backCard.parentElement.remove();
    }
    
    // Make card container fit perfectly
    const container = document.querySelector('.card-container');
    if (container) {
      container.style.margin = '0';
      container.style.padding = '0';
      container.style.gap = '0';
      container.style.width = '3.75in';
      container.style.height = '2.25in';
    }
    
    // Make front card fill the entire space
    const frontCard = document.querySelector('.card-front');
    if (frontCard) {
      frontCard.style.margin = '0';
      frontCard.style.position = 'absolute';
      frontCard.style.top = '0';
      frontCard.style.left = '0';
      frontCard.style.width = '3.75in';
      frontCard.style.height = '2.25in';
    }
  });
  
  await page.pdf({
    path: path.join(OUTPUT_DIR, 'business-card-front.pdf'),
    width: `${DIMENSIONS.businessCard.width}in`,
    height: `${DIMENSIONS.businessCard.height}in`,
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('  ✅ Front PDF saved: business-card-front.pdf');

  // Reload page for back side PDF
  await page.goto(businessCardPath, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(resolve => setTimeout(resolve, 500));

  // Export back side PDF (element only, no white space)
  console.log('  📄 Creating back side PDF...');
  await page.evaluate(() => {
    // Remove all body styling and make it fit the card exactly
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.background = 'transparent';
    document.body.style.width = '3.75in';
    document.body.style.height = '2.25in';
    document.body.style.overflow = 'hidden';
    
    // Hide everything except back card
    const instructions = document.querySelectorAll('.instructions');
    const labels = document.querySelectorAll('.card-label');
    instructions.forEach(el => el.remove());
    labels.forEach(el => el.remove());
    
    // Hide front card
    const frontCard = document.querySelector('.card-front');
    if (frontCard && frontCard.parentElement) {
      frontCard.parentElement.remove();
    }
    
    // Make card container fit perfectly
    const container = document.querySelector('.card-container');
    if (container) {
      container.style.margin = '0';
      container.style.padding = '0';
      container.style.gap = '0';
      container.style.width = '3.75in';
      container.style.height = '2.25in';
    }
    
    // Make back card fill the entire space
    const backCard = document.querySelector('.card-back');
    if (backCard) {
      backCard.style.margin = '0';
      backCard.style.position = 'absolute';
      backCard.style.top = '0';
      backCard.style.left = '0';
      backCard.style.width = '3.75in';
      backCard.style.height = '2.25in';
    }
  });
  
  await page.pdf({
    path: path.join(OUTPUT_DIR, 'business-card-back.pdf'),
    width: `${DIMENSIONS.businessCard.width}in`,
    height: `${DIMENSIONS.businessCard.height}in`,
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('  ✅ Back PDF saved: business-card-back.pdf');

  // Create combined PDF
  console.log('  📄 Creating combined PDF...');
  await page.goto(businessCardPath, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: path.join(OUTPUT_DIR, 'business-card.pdf'),
    width: `${DIMENSIONS.businessCard.width}in`,
    height: `${DIMENSIONS.businessCard.height}in`,
    printBackground: true,
    preferCSSPageSize: false
  });
  console.log('  ✅ Combined PDF saved: business-card.pdf');

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
  const flyerPngPath = path.join(OUTPUT_DIR, 'flyer.png');
  if (flyerElement) {
    await flyerElement.screenshot({
      path: flyerPngPath,
      omitBackground: false
    });
    console.log('  ✅ PNG saved: flyer.png');
    await addDpiMetadata(flyerPngPath);
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
