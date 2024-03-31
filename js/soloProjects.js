var projects = [
    {visible: true, name: "R-type", description: "A partial recreation of the R-type arcade game.", language: "C++", duration: "6 weeks", imageURL: "rtypethumbnail.png", project: "R-type"},
    {visible: true, name: "Lime raytracer", description: "A CPU raytracer.", language: "C++", duration: "8 weeks", imageURL: "LIMEThumbnail.png", project: "Lime"},
    {visible: false, name: "[WIP] Constructive Solid Geometry", description: "An implementation of constructive solid geometry with the C++ programming language.", language: "C++", duration: "Unknown", imageURL: "BallThumbnail.png", project: "CSG"},
    {visible: false, name: "[WIP] OpenXR project", description: "A project I created to learn about the OpenXR api for implementing VR/AR support.", language: "C++", duration: "Unknown", imageURL: "BallThumbnail.png", project: "OpenXR"},
];

$("#projectList").ready(function () {
    setTimeout(() => {
        $("#loading").remove();

        projects.forEach(function (item) {
            if(item.visible) {
                $("#projectList").append(
                    "<a href=\"./index.html?page=soloProjects&game=" + item.project + "\">" +
                    "   <div class=\"game\">" +
                    "       <img src=\"./images/thumbnails/" + item.imageURL + "\" />" +
                    "       <div class=\"text\">" +
                    "           <h3>" + item.name + "</h3>" +
                    "           <p>" + item.description + "</p>" +
                    "           <p class=\"sameLine\"><b>Language:</b> " + item.language + "</p>" +
                    "           <p class=\"sameLine\"><b>Duration:</b> " + item.duration + "</p>" +
                    "       </div>" +
                    "   </div>" +
                    "</a>"
                );
            }    
         });
    }, 250);
});