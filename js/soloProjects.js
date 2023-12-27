var projects = [
    {name: "Test", description: "Test", imageURL: "test", link: "Test"},
    {name: "Test", description: "Test", imageURL: "test", link: "Test"},
    {name: "Test", description: "Test", imageURL: "test", link: "Test"},
    {name: "Test", description: "Test", imageURL: "test", link: "Test"}
];

$(document).ready(function () {
	projects.forEach(function (item) {
        $("#projectList").append(
            "<div>" +
            "   <h3>" + item.name + "</h3>" +
            "   <p>" + item.description + "</p>" +
            "</div>"
        );
    });
});