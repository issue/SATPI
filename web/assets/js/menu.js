function buildmenu() {
	var menu = "";
	menu += "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">";
	menu += "<div class=\"container-fluid\">";
	menu +=   "<a class=\"navbar-brand\" href=\"https://github.com/Barracuda09/SATPI\">SatPI</a>";
	menu +=   "<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#SatPINavbar\">";
	menu +=     "<span class=\"navbar-toggler-icon\"></span>";
	menu +=   "</button>";
	menu +=   "<div class=\"collapse navbar-collapse\" id=\"SatPINavbar\">";
	menu +=     "<ul class=\"navbar-nav col-md-auto\">";
	menu +=       "<li class=\"nav-item\"><a id=\"index\" class=\"nav-link\" href=\"index.html\"><span class=\"fas fa-home\"></span> Home</a></li>";
	menu +=       "<li class=\"nav-item\"><a id=\"log\" class=\"nav-link\" href=\"log.html\"><span class=\"fas fa-list-alt\"></span> Log</a></li>";
	menu +=       "<li class=\"nav-item\"><a id=\"frontendoverview\" class=\"nav-link\" href=\"frontendoverview.html\"><span class=\"fas fa-binoculars\"></span> Frontend Overview</a></li>";
	menu +=       "<li class=\"nav-item\"><a id=\"frontend\" class=\"nav-link\" href=\"frontend.html\"><span class=\"fas fa-stream\"></span> Frontend</a></li>";
	menu +=       "<li class=\"nav-item\"><a id=\"config\" class=\"nav-link\" href=\"config.html\"><span class=\"fas fa-cogs\"></span> Configure</a></li>";
	menu +=       "<li class=\"nav-item\"><a id=\"wiki\" class=\"nav-link\" href=\"https://github.com/Barracuda09/SATPI/wiki\"><span class=\"fas fa-question\"></span> Wiki</a></li>";
	menu +=       "<li class=\"nav-item\"><a id=\"contact\" class=\"nav-link\" href=\"contact.html\"><span class=\"fas fa-envelope-open\"></span> Contact</a></li>";
	menu +=       "<li class=\"nav-item\"><a id=\"about\" class=\"nav-link\" href=\"about.html\"><span class=\"fas fa-info-circle\"></span> About</a></li>";
	menu +=     "</ul>";
	menu +=     "<span class=\"navbar-text small-text-size\">";
	menu +=       "Copyright &#169; 2014 - 2024 Marc Postema";
	menu +=     "</span>";
	menu +=   "</div>";
	menu +=   "</div>";
	menu += "</nav>";
	return menu;
}

function setMenuItemActive(param) {
	var obj = document.getElementById(param);
	obj.className = "nav-link active";
}
