var projects = [
    {name: "R-type", description: "This is a recreation of the clasic arcade game R-type.", imageURL: "test", project: "R-type"}
];

$("#projectList").on("load", function () {
	projects.forEach(function (item) {
        $("#projectList").append(
            "<div>" +
            "   <img>" +
            "   <h3>" + item.name + "</h3>" +
            "   <p>" + item.description + "</p>" +
            "</div>"
        );
    });
});