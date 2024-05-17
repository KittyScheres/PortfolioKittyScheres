var projects = [
    {visible: true, name: "OpenXR fundamentals", description: "A project where I followed a tutorial to get a better understanding of how to implement AR/VR into my own projects.", language: "C++", duration: "2 weeks", type: "Self-study", teamSize: "1 person", platforms: "Windows", teamRole: "VrProgrammer", imageURL: "DefaultThumbnail.png", project: "OpenXrFundamentals"},
    {visible: true, name: "[WIP] On the bubble", description: "A custom engine based game inspired by the game \"Super Monkey Ball\" with a big focus on user generated content.", language: "C++", duration: "32 weeks",  type: "Custom engine", teamSize: "13 people", platforms: "Windows/PS5", teamRole: "Generalist programmer", imageURL: "BallThumbnail.png", project: "OnTheBubble"},
    {visible: true, name: "Wombat combat engine", description: "A custom FPS engine that uses TrechBroom as its level editor.", language: "C++", duration: "16 weeks", type: "Custom engine", teamSize: "7 people", platforms: "Windows/PS5", teamRole: "Engine programmer", imageURL: "WombatCombatThumbnail.png", project: "FPSEngine"},
    {visible: true, name: "Camp champ", description: "A 2 vs 2 game of capture the flag made using the Unreal engine.", language: "Unreal blueprints", duration: "12 weeks", type: "Game", teamSize: "14 people", platforms: "Windows", teamRole: "Tech lead", imageURL: "CampChampThumbnail.png", project: "CampChamp"},
];

$("#projectList").ready(function () {
    setTimeout(() => {
        $("#loading").remove();

        projects.forEach(function (item) {
            if (item.visible){
                $("#projectList").append(
                    "<a href=\"./index.html?page=teamProjects&game=" + item.project + "\">" +
                    "   <div class=\"game\">" +
                    "       <img src=\"./images/thumbnails/" + item.imageURL + "\" />" +
                    "       <div class=\"text\">" +
                    "           <h3>" + item.name + "</h3>" +
                    "           <p>" + item.description + "</p>" +
                    "           <div class=\"tagsContainer\">" + 
                    "               <p class=\"sameLine\"><b>Language:</b> " + item.language + "</p>" +
                    "               <p class=\"sameLine\"><b>Duration:</b> " + item.duration + "</p>" +
                    "               <p class=\"sameLine\"><b>Type:</b> " + item.type + "</p>" +
                    "               <p class=\"sameLine\"><b>Team size:</b> " + item.teamSize + "</p>" +
                    "               <p class=\"sameLine\"><b>Platforms:</b> " + item.platforms + "</p>" +
                    "               <p class=\"sameLine\"><b>Team role:</b> " + item.teamRole + "</p>" +
                    "           </div>" +
                    "       </div>" +
                    "   </div>" +
                    "</a>"
                );
            }
        });
    }, 250);
});