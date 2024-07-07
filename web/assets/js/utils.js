function buildStreamURL(xmlDoc, streamID) {
	var data = xmlDoc.querySelector(streamID + "delsys");
	if (!data) {
		return "";
	}
	var delsys = data.innerHTML;
	if (delsys == "UNKNOWN DELSYS") {
		return "";
	}
	var url = "http://";
	url += xmlDoc.querySelector("ipaddress").querySelector("value").innerHTML;
	url += ":";
	url += xmlDoc.querySelector("httpport").querySelector("value").innerHTML;
	url += "/?";
	url += "freq=";
	url += (xmlDoc.querySelector(streamID + "tunefreq").innerHTML / 1000);
	url += "&sr=";
	url += (xmlDoc.querySelector(streamID + "tunesymbol").innerHTML / 1000);
	url += "&msys=";
	url += delsys;
	url += "&mtype=";
	url += xmlDoc.querySelector(streamID + "modulation").innerHTML;
	url += "&fec=";
	url += xmlDoc.querySelector(streamID + "fec").innerHTML;
	if (delsys == "dvbc") {
	} else if (delsys == "dvbs" || delsys == "dvbs2") {
		url += "&pol=";
		url += xmlDoc.querySelector(streamID + "pol").innerHTML;
		url += "&src=";
		url += xmlDoc.querySelector(streamID + "src").innerHTML;
	}
	url += "&pids=";
	url += xmlDoc.querySelector(streamID + "pidcsv").innerHTML;
	return url;
}

function setColorMode() {
	if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
		document.documentElement.setAttribute('data-bs-theme','light')
	}
	else {
		document.documentElement.setAttribute('data-bs-theme','dark')
	}
	setCookie("colormode", document.documentElement.getAttribute('data-bs-theme'), 365);
}

function getColorMode() {
	let colormode = getCookie("colormode");
	if(colormode !== null){
		document.documentElement.setAttribute('data-bs-theme', colormode)
	}else{
		document.documentElement.setAttribute('data-bs-theme','light') //default to light theme
	}
}

function showModalAlert(msj) {
	alertModal = $('<div id="alertModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="alertModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h4 id="alertModalTitle" class="modal-title">Alert</h4></div><div class="modal-body"><p></p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button></div></div></div></div>');
	alertModal.find(".modal-body").text(msj);
	alertModal.modal('show');
}
