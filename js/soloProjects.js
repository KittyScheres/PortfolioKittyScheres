var projects = [
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"},
    {name: "Test", description: "Test", imageURL: "test", project: "Test"}
];

$(document).ready(function () {
	projects.forEach(function (item) {
        $("#projectList").append(
            "<div >" +
            "   <img>" +
            "   <h3>" + item.name + "</h3>" +
            "   <p>" + item.description + "</p>" +
            "</div>"
        );
    });
});