console.clear = () => console.log('Console was cleared')
const i = setInterval(() => {
    if (window.turnstile) {
        clearInterval(i)
        window.turnstile.render = (a, b) => {
            let params = {
                sitekey: b.sitekey,
                pageurl: window.location.href,
                data: b.cData,
                pagedata: b.chlPageData,
                action: b.action,
                userAgent: navigator.userAgent,
                json: 1
            }
            // we will intercept the message in puppeeter
            console.log('intercepted-params:' + JSON.stringify(params))
            window.cfCallback = b.callback
            return
        }
    }
}, 50)