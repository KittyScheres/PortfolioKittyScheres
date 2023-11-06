// From: https://flannyh.github.io/portfolio/?page=./parts/home.html
$(document).ready(function () {
	// Get the page from the link `?page=pageName`
	const url_params = new URLSearchParams(window.location.search);
	page_source = url_params.get("page");
	if (page_source == null) {
		page_source = "aboutMe";
	}
	$("#contentField").load("./../pages/" + page_source + ".html");
});