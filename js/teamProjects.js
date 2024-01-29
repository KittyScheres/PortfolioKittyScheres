var projects = [
    {name: "[WIP] Project Ball", description: "A custom engine based game inspired by the game \"Super Monkey Ball\" with a big focus on user generated content.", imageURL: "test", project: "Ball"},
    {name: "Wombat combat engine", description: "A custom FPS engine inspired by Quake.", imageURL: "test", project: "FPSEngine"},
    {name: "Camp champ", description: "A 2vs2 game of capture the flag made using the Unreal engine.", imageURL: "test", project: "CampChamp"},
    {name: "Astrohaunt", description: "An Paradroid inspired game made with the Unreal engine where you play as an astronaut fighting ghosts in a haunted mansion in space", imageURL: "test", project: "Astrohaunt"},
];

$("#projectList").ready(function () {
	projects.forEach(function (item) {
        $("#projectList").append(
            "<div class=\"Game\" href=\"./index.html?game=" + item.project + "\">" +
            "   <img>" + 
            "   <h3>" + item.name + "</h3>" +
            "   <p>" + item.description + "</p>" +
            "</div>"
        );
    });
});