let xmlLoaded
let filename
async function loadXMLDoc(url) {
fetch(url)
    .then(response => {
        if (!response.ok) {
					throw new Error(`Response status: ${response.status}`);
        }
        return response.text();
    })
    .then(xmlText => {
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xmlText,'text/xml');
				xmlLoaded = xmlDoc;
				filename = url;
				xmlloaded(xmlDoc);
    })
    .catch(error => {
        console.error(`There was a problem during the fetch operation:`, error);
    });
}

async function loadJSONDoc(url) {
try {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Response status: ${response.status}`);
	}
	const json = await response.json();
	jsonloaded(JSON.stringify(json));
} catch (error) {
	console.error(error.message);
	}
}
