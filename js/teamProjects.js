var projects = [
    {visible: true, name: "[WIP] Project Ball", description: "A custom engine based game inspired by the game \"Super Monkey Ball\" with a big focus on user generated content.", imageURL: "test", project: "Ball"},
    {visible: true, name: "Wombat combat engine", description: "A custom FPS engine inspired by Quake.", imageURL: "test", project: "FPSEngine"},
    {visible: false, name: "Camp champ", description: "A 2vs2 game of capture the flag made using the Unreal engine.", imageURL: "test", project: "CampChamp"},
    {visible: false, name: "Astrohaunt", description: "An Paradroid inspired game made with the Unreal engine where you play as an astronaut fighting ghosts in a haunted mansion in space", imageURL: "test", project: "Astrohaunt"},
];

$("#projectList").ready(function () {
	projects.forEach(function (item) {
        if (visible){
            $("#projectList").append(
                "<a href=\"./index.html?page=\"teamProjects\"&game=" + item.project + "\">" +
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