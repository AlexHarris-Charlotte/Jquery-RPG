// Object Constructor
function character(name, image, health, attackPower, counterAttack) {
    this.name = name;
    this.image = image;
    this.health = health;
    this.attackPower = attackPower;
    this.counterAttack = counterAttack;
} 

// Character Objects
var obiWan = new character("Obi-Wan Kenobi", "https://media0.giphy.com/media/3ohuAkAS7Uzq20qzXW/200.gif#29-grid1", 150, 10, 15);
var anakin = new character("Anakin Skywalker", "https://media1.giphy.com/media/Ii3yAgfTEHPd6/200w.gif#22-grid1",175, 8, 30);
var grevious = new character("General Grevious", "https://media2.giphy.com/media/kAUgtSozkruPC/200.gif#0-grid1",100, 20, 20);
var windu = new character("Mace Windu", "https://media0.giphy.com/media/3ornjTfcat9eNI1wg8/200.gif#2-grid1",200, 8, 25);

var charArray = [obiWan, anakin, grevious, windu];
var value;
var index;
var playerCharacter;
var enemyCharacter;
var newDiv = $("<div>");
var nameP = $("<p>");
var healthP = $("<p>");
var newImg = $("<img>");

function startGameState() {
    for(var i = 0; i < charArray.length; i++) {
        var newDiv = $("<div>");
        var nameP = $("<p>");
        var healthP = $("<p>");
        var newImg = $("<img>");
        newDiv.addClass("position character");
        newDiv.attr("value", i);
        nameP.text(charArray[i].name);
        nameP.addClass("centered");
        newImg.attr("src", charArray[i].image)
        newImg.addClass("image");
        healthP.text(charArray[i].health);
        nameP.append(newImg);
        nameP.append(healthP);
        newDiv.append(nameP);
        $("#characters").append(newDiv);
    }
}
startGameState();

// on click need to keep selected character in the top div
// maybe remove the clicked character from the charArray and use another forloop to append to enemies div
// need to move the other characters to enemies available to attack
$(".character").on("click", function() {
    $(this).attr("id", "player");
    $(".character").not(this).appendTo("#enemies");
    $(".character").not(this).addClass("enemyCharacter");
    $(".character").not(this).css("backgroundColor", "red");
    $(".character").off("click");
    console.log($("#defender").children().length);
})

$("#enemies").on("click", ".enemyCharacter", function(){
    $(this).attr("id", "enemySelected");
    console.log("ID added");
})

$("#enemies").on("click", ".enemyCharacter", function(){
    enemySelected();
});

function enemySelected() {
    console.log("enemy clicked to defender");
    $("#enemySelected").appendTo("#defender");
    $("#enemySelected").attr("id", "enemyDefender");
    if($("#defender").has(".enemyCharacter")) {
        $("#enemies").off("click");     
        $("button").on("click", function() {
            var playerValue = ($("#player").attr("value"));
            var enemyValue = ($("#enemyDefender").attr("value"));
            playerValue = parseInt(playerValue);
            enemyValue = parseInt(enemyValue);
            playerCharacter = charArray[playerValue];
            enemyCharacter = charArray[enemyValue];
            console.log("Player Attack power:" + playerCharacter.attackPower);
            console.log("Enemy Counter attack power:" + enemyCharacter.counterAttack);
            playerCharacter.health -= enemyCharacter.counterAttack;
            enemyCharacter.health -= playerCharacter.attackPower;
            $("#player p").last().text(playerCharacter.health);
            $("#enemyDefender p").last().text(enemyCharacter.health);
            playerCharacter.attackPower += playerCharacter.attackPower;
            if(enemyCharacter.health <= 0) {
                $("#enemyDefender").remove();
                $("#enemies").on("click", ".enemyCharacter", function(){
                    $(this).attr("id", "enemySelected");
                    appendToDefend();
                });
                if($("#defender").children().length === 1) {
                    if($("#enemies").children().length === 0) {
                        $("button").text("Reset");
                        // on reset click
                        // $(".character").remove();
                        // startGameState();
                        // need change character values back to defaults
                        // need to change button text back to attack
                    }
                }
            }
        }); 
    }
}


function appendToDefend () {
    $("#enemySelected").appendTo("#defender");
    $("#enemySelected").attr("id", "enemyDefender");
}


// if($("#defender").children().length === 0) {
//     if($("#enemies").children().length === 0) {
//         alert()
//     }
// }