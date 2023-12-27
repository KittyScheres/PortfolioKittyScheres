// From: https://flannyh.github.io/portfolio/?page=./parts/home.html
// |This code is used to setup the system that allows
// |me to change the page displayed in the content of
// |the index.html page.
$(document).ready(function () {
	// Get the page from the link `?page=pageName`
	const url_params = new URLSearchParams(window.location.search);
	page_source = url_params.get("page");
	
	// Get about me page by default
	if (page_source == null) {
		page_source = "aboutMe";
	}
	
	// Set content for the selected page
	$("#contentField").load("./../pages/" + page_source + ".html");
	$("#localStyle").attr("href", "./css/" + page_source + ".css");
	$("#localFunctionality").attr("src", "./js/" + page_source + ".js");
	$("#" + page_source).addClass("Active");
});