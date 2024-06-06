import puppeteer from 'puppeteer'

const normalizeUserAgent = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox']
            })
            let userAgent = await browser.userAgent()
            let normalized = userAgent.replace('Headless', '')
            normalized = normalized.replace('Chromium', 'Chrome')
            await browser.close()
            resolve(normalized)
        } catch (e) {
            resolve('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.0 Safari/537.36')
        }
    })
}

export { normalizeUserAgent }