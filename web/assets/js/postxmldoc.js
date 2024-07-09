function postData1(filename, data) {
	//refresh_time = 2000;
	if (window.XMLHttpRequest) {
		xmlhttp_post = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		xmlhttp_post = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		throw new Error("Ajax is not supported by this browser");
	}

	// callback function
	xmlhttp_post.onreadystatechange = function () {
		if (xmlhttp_post.readyState === 4) {
			if (xmlhttp_post.status == 200 && xmlhttp_post.status < 300) {
				showModalAlert("This is strange, should not happen");
			}
		}
	}

	// specify our action, location and send to the server
	xmlhttp_post.open("POST", filename);
	xmlhttp_post.setRequestHeader("Content-Type", "text/xml");
	xmlhttp_post.send(data);
}

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml',
      },
      body: data,
    });


    if (response.ok) {
      const result = await response;
      console.log('Success:', result);
    } else {
      console.error('Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.error(`There was a problem during the fetch operation:`, error);
  }
}
