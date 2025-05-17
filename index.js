const puppeteer = require('puppeteer');

async function getTrends() {
    let browser;
    try {
        browser = await puppeteer.launch({
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium-browser',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        });

        const page = await browser.newPage();
        await page.goto('https://trends24.in/', { waitUntil: 'networkidle2' });
        await page.waitForSelector('.trend-card__list', { timeout: 15000 });

        const trends = await page.$$eval('.trend-card__list li a', elements => 
            elements.map(el => el.textContent.trim())
        );

        return [...new Set(trends)]; // Remove duplicates
    } catch (error) {
        console.error('Error:', error);
        return [];
    } finally {
        if (browser) await browser.close();
    }
}

// Run if executed directly
if (require.main === module) {
    getTrends()
        .then(trends => console.log('Trends:', trends))
        .catch(console.error);
}

module.exports = { getTrends };
