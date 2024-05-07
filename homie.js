console.log("entered homie.js");

document.getElementById('analyze_button').addEventListener('click', runScraper);

function runScraper() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const targetUrl = tabs[0].url;

        chrome.cookies.get({"name": "li_at", url: "https://www.linkedin.com/"}, (cookie) => {
            if (!cookie) {
                console.log("Cookie not found.");
            } else {
                const body = JSON.stringify({
                    cookies: cookie.value,
                    target_url: targetUrl
                });

                fetch('http://40.113.23.178/scrape-connections', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body
                })
                    .then(resp => {
                        console.log("Response", resp);
                    })
                    .catch(err => {
                        console.log("Error", err);
                    })
            }
        });
    });
}

