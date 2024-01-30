var projects = [
    {visible: true, name: "R-type", description: "This is a recreation of the clasic arcade game R-type made using the C++ programming language.", imageURL: "rtypeThumbnail.png", project: "R-type"},
    {visible: true, name: "LIME CPU raytracer", description: "A CPU based Raytracer made with the C++ programming language.", imageURL: "LIMEThumbnail.png", project: "LIME"},
    {visible: false, name: "[WIP] Constructive Solid Geometry", description: "An implementation of constructive solid geometry with the C++ programming language.", imageURL: "BallThumbnail.png", project: "CSG"},
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
                    "       </div>" +
                    "   </div>" +
                    "</a>"
                );
            }    
         });
    }, 250);
});