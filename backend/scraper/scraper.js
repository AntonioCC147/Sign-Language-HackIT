const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

async function scrape(url) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const pageData = [];

    const filterString = '.exn3ah96, p:contains(CITEȘTE ȘI), p:contains(Urmărește), p:contains(Advertisement)'

    let articlesContent = $('article:first h1, article:first h2, article:first h3, article:first p, article:first img').not(filterString);
    if (articlesContent.length < 3) {
        articlesContent = $('h1, h2, h3, p').not(filterString);
    }

    articlesContent.each((_idx, el) => {
        if ($(el)[0].name == 'p' && $(el).text().trim().length < 10) return;
        pageData.push({
            "type": $(el)[0].name,
            "data": $(el)[0].name == "img" ? $(el)[0].attribs['src'] : $(el).text().trim()
        });
    });

    pageData.push({ "type": "url", "data": url, "placeholder": "Sursa originala" });

    return pageData;
}

async function searchFor(searchQuery) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on("request", request => {
        request.resourceType() === "document" ? 
        request.continue() : request.abort();
    });

    await page.goto("https://www.google.com/", {waitUntil: "domcontentloaded"});
    await page.waitForSelector('button#L2AGLb', {visible: true});
    await page.click('button#L2AGLb');

    await page.waitForSelector('form[action="/search"] textarea', {visible: true});
    await page.type('form[action="/search"] textarea', searchQuery);
    await Promise.all([
        page.keyboard.press("Enter"),
        page.waitForNavigation({waitUntil: "domcontentloaded"})
    ]);
    await page.evaluate(async (maxScrolls) => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var scrolls = 0;  // scrolls counter
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                scrolls++;  // increment counter

                // stop scrolling if reached the end or the maximum number of scrolls
                if(totalHeight >= scrollHeight - window.innerHeight || scrolls >= maxScrolls){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    }, 50);
    await page.waitForSelector(".LC20lb", {visible: true});
    const searchResults = await page.$$eval(".LC20lb", els => 
        els.map(e => ({title: e.innerText, link: e.parentNode.href}))
    );
    // page.close();
    // browser.close();
    return searchResults;
}

module.exports = { scrape, searchFor };