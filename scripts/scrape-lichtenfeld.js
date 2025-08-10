const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const https = require('https');

const BASE_URL = 'https://lichtenfeld.com.ua';

// Create directories if they don't exist
async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (err) {
    console.error(`Error creating directory ${dirPath}:`, err);
  }
}

// Download image with retry logic
async function downloadImage(imageUrl, filename, retries = 3) {
  try {
    const fullUrl = imageUrl.startsWith('http') ? imageUrl : `${BASE_URL}${imageUrl}`;
    console.log(`Downloading: ${fullUrl} -> ${filename}`);
    
    const response = await axios({
      url: fullUrl,
      method: 'GET',
      responseType: 'arraybuffer',
      timeout: 30000,
      httpsAgent: new https.Agent({ rejectUnauthorized: false })
    });
    
    await fs.writeFile(filename, response.data);
    console.log(`✓ Downloaded: ${filename}`);
    return true;
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying download (${retries} left): ${imageUrl}`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      return downloadImage(imageUrl, filename, retries - 1);
    }
    console.error(`✗ Failed to download ${imageUrl}:`, error.message);
    return false;
  }
}

// Main scraping function
async function scrapeLichtenfeld() {
  try {
    console.log('Starting Lichtenfeld.com.ua scraping...\n');
    
    // Create directories
    await ensureDir(path.join(__dirname, '../public/images'));
    await ensureDir(path.join(__dirname, '../public/images/products'));
    await ensureDir(path.join(__dirname, '../public/images/hero'));
    await ensureDir(path.join(__dirname, '../data'));
    
    // Fetch main page
    const { data: html } = await axios.get(BASE_URL, {
      httpsAgent: new https.Agent({ rejectUnauthorized: false })
    });
    
    const $ = cheerio.load(html);
    
    // Extract all content
    const content = {
      hero: {},
      products: [],
      about: {},
      contacts: {},
      images: []
    };
    
    // Extract hero content
    console.log('Extracting hero content...');
    const heroSection = $('.hero, .banner, header').first();
    if (heroSection.length) {
      content.hero = {
        title: heroSection.find('h1').text().trim() || 'Lichtenfeld',
        subtitle: heroSection.find('p').first().text().trim(),
        backgroundImage: heroSection.find('img').first().attr('src')
      };
    }
    
    // Extract all images
    console.log('Finding all images...');
    const imageSet = new Set();
    
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      const alt = $(el).attr('alt') || '';
      if (src && !src.startsWith('data:')) {
        imageSet.add(src);
        content.images.push({ src, alt });
      }
    });
    
    // Look for background images in CSS
    $('[style*="background-image"]').each((i, el) => {
      const style = $(el).attr('style');
      const match = style.match(/url\(['"]?([^'")]+)['"]?\)/);
      if (match && match[1]) {
        imageSet.add(match[1]);
      }
    });
    
    // Extract product information
    console.log('Extracting product information...');
    
    // Try different selectors for products
    const productSelectors = [
      '.product', '.cheese', '.item', 
      '[class*="product"]', '[class*="cheese"]',
      '.card', '.good', 'article'
    ];
    
    for (const selector of productSelectors) {
      if ($(selector).length > 0) {
        $(selector).each((i, el) => {
          const product = {
            name: $(el).find('h2, h3, h4, .title, .name').first().text().trim(),
            description: $(el).find('p, .description, .text').first().text().trim(),
            price: $(el).find('.price, [class*="price"]').text().trim(),
            image: $(el).find('img').first().attr('src'),
            category: $(el).attr('data-category') || ''
          };
          
          if (product.name) {
            content.products.push(product);
          }
        });
        break;
      }
    }
    
    // Extract contact information
    console.log('Extracting contact information...');
    const phoneRegex = /(\+380\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2})/g;
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    
    const bodyText = $('body').text();
    const phones = bodyText.match(phoneRegex) || [];
    const emails = bodyText.match(emailRegex) || [];
    
    content.contacts = {
      phones: [...new Set(phones)],
      emails: [...new Set(emails)],
      address: $('.address, [class*="address"]').first().text().trim()
    };
    
    // Download all images
    console.log(`\nFound ${imageSet.size} unique images. Downloading...`);
    
    let imageIndex = 0;
    for (const imageSrc of imageSet) {
      const ext = path.extname(imageSrc) || '.jpg';
      const filename = `image_${imageIndex}${ext}`;
      const filepath = path.join(__dirname, '../public/images', filename);
      
      await downloadImage(imageSrc, filepath);
      imageIndex++;
    }
    
    // Save content data
    console.log('\nSaving content data...');
    await fs.writeFile(
      path.join(__dirname, '../data/lichtenfeld-content.json'),
      JSON.stringify(content, null, 2)
    );
    
    console.log('✓ Content saved to data/lichtenfeld-content.json');
    console.log('\nScraping completed successfully!');
    
    // Print summary
    console.log('\n=== Summary ===');
    console.log(`Products found: ${content.products.length}`);
    console.log(`Images found: ${imageSet.size}`);
    console.log(`Phone numbers: ${content.contacts.phones.join(', ')}`);
    console.log(`Emails: ${content.contacts.emails.join(', ')}`);
    
  } catch (error) {
    console.error('Error during scraping:', error);
  }
}

// Run the scraper
scrapeLichtenfeld();