var projects = [
    {visible: true, name: "OpenXR fundamentals", description: "A project where I followed a tutorial to get a better understanding of how to implement AR/VR into my own projects.", language: "C++", duration: "2 weeks", type: "Self-study", platforms: "Windows", developmentYear: "2024", imageURL: "DefaultThumbnail.png", project: "OpenXrFundamentals"},
    {visible: false, name: "[WIP] Constructive Solid Geometry", description: "An implementation of constructive solid geometry with the C++ programming language.", language: "C++", duration: "2 weeks", type: "Self-study", platforms: "Windows", developmentYear: "2024", imageURL: "DefaultThumbnail.png", project: "CSG"},
    {visible: true, name: "Lime raytracer", description: "A CPU raytracer.", language: "C++", duration: "8 weeks", type: "Renderer", platforms: "Windows", developmentYear: "2022", imageURL: "LIMEThumbnail.png", project: "Lime"},
    {visible: true, name: "R-type", description: "A partial recreation of the R-type arcade game.", language: "C++", duration: "6 weeks", type: "Game", platforms: "Windows", developmentYear: "2021", imageURL: "rtypethumbnail.png", project: "R-type"},
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
                    "           <div class=\"tagsContainer\">" +
                    "               <p class=\"sameLine\"><b>Language:</b> " + item.language + "</p>" +
                    "               <p class=\"sameline\"><b>Development year:</b> " + item.developmentYear + "</p>" +
                    "               <p class=\"sameLine\"><b>Duration:</b> " + item.duration + "</p>" +
                    "               <p class=\"sameLine\"><b>Type:</b> " + item.type + "</p>" +
                    "               <p class=\"sameLine\"><b>Platforms:</b> " + item.platforms + "</p>" +
                    "           </div>" +
                    "       </div>" +
                    "   </div>" +
                    "</a>"
                );
            }    
         });
    }, 250);
});