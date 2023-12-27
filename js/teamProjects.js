var projects = [
    {name: "Camp champ", description: "Be the champ of the camp.", imageURL: "test", project: "CampChamp"}
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