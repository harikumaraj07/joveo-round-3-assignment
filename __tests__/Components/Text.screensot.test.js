import puppeteer from 'puppeteer-core';

describe("Screenshot testing", () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: true, channel: "chrome"});
        page = await browser.newPage();
        await page.goto('http://localhost:3000'); // Replace with your local URL
    });

    test('renders MyComponent correctly', async () => {
        await page.setViewport({ width: 1920, height: 1080 }); // Set viewport size
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    });

    afterAll(async () => {
        await browser.close();
    });
})