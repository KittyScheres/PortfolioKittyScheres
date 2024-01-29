var projects = [
    {visible: true, name: "R-type", description: "This is a recreation of the clasic arcade game R-type made using the C++ programming language.", imageURL: "test", project: "R-type"},
    {visible: true, name: "LIME CPU raytracer", description: "A CPU based Raytracer made with the C++ programming language", imageURL: "test", project: "LIME"},
    {visible: false, name: "[WIP] Constructive Solid Geometry", description: "An implementation of constructive solid geometry with the C++ programming language.", imageURL: "test", project: "CSG"},
];

$("#projectList").ready(function () {
	projects.forEach(function (item) {
        if(item.visible) {
            $("#projectList").append(
                "<a href=\"./index.html?page=soloProjects&game=" + item.project + "\">" +
                "   <div class=\"Game\">" +
                "       <img>" +
                "       <h3>" + item.name + "</h3>" +
                "       <p>" + item.description + "</p>" +
                "   </div>" +
                "</a>"
            );
        }
    });
});