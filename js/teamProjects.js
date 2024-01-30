var projects = [
    {visible: true, name: "[WIP] Project Ball", description: "A custom engine based game inspired by the game \"Super Monkey Ball\" with a big focus on user generated content.", imageURL: "BallThumbnail.png", project: "Ball"},
    {visible: true, name: "Wombat combat engine", description: "A custom FPS engine inspired by Quake.", imageURL: "WombatCombatThumbnail.png", project: "FPSEngine"},
    {visible: false, name: "Camp champ", description: "A 2 vs 2 game of capture the flag made using the Unreal engine.", imageURL: "BallThumbnail.png", project: "CampChamp"},
    {visible: false, name: "Astrohaunt", description: "An Paradroid inspired game made with the Unreal engine where you play as an astronaut fighting ghosts in a haunted mansion in space.", imageURL: "BallThumbnail.png", project: "Astrohaunt"},
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
                    "       </div>" +
                    "   </div>" +
                    "</a>"
                );
            }
        });
    }, 250);
});