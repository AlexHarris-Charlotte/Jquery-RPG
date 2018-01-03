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


// on click need to keep selected character in the top div
// maybe remove the clicked character from the charArray and use another forloop to append to enemies div
// need to move the other characters to enemies available to attack
$(".character").on("click", function() {
    $(this).attr("id", "player");
    $(".character").not(this).appendTo("#enemies");
    $(".character").not(this).addClass("enemyCharacter");
    $(".character").not(this).css("backgroundColor", "red");
    var value = ($(this).attr("value"));
    value = parseInt(value);
    $(".character").off("click");
})


// #enemies is the parent element, .enemyCharacter is what we are moving
$("#enemies").on("click", ".enemyCharacter", function() {
    $(this).appendTo("#defender");
    $(this).attr("id", "enemyDefender");
    if($("#defender").has(".enemyCharacter")) {     //This line is bugged
        $("#enemies").off("click");
        $("button").on("click", function() {
            var playerValue = ($("#player").attr("value"));
            var enemyValue = ($("#enemyDefender").attr("value"));
            playerValue = parseInt(playerValue);
            enemyValue = parseInt(enemyValue);
            console.log("Player value:" + playerValue);
            console.log("Enemy value:" + enemyValue);
            playerCharacter = charArray[playerValue];
            enemyCharacter = charArray[enemyValue];
            playerCharacter.health -= enemyCharacter.counterAttack;
            enemyCharacter.health -= playerCharacter.attackPower;
            $("#player p").last().text(playerCharacter.health);
            $("#enemyDefender p").last().text(enemyCharacter.health);
            playerCharacter.attackPower += playerCharacter.attackPower;
            if(enemyCharacter.health <= 0) {
                $("#enemyDefender").remove();
            }
        })
    }
})















