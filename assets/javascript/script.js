// Pseudocode
// Need a constructor to make objects for each character
// can store characters in an array
// Use jquery to append characters to a div on the page
//  
//  
//  

function character(name, image, health, attackPower, counterAttack) {
    this.name = name;
    this.image = image;
    this.health = health;
    this.attackPower = attackPower;
    this.counterAttack = counterAttack;
} 

var obiWan = new character("Obi-Wan Kenobi", "https://media0.giphy.com/media/3ohuAkAS7Uzq20qzXW/200.gif#29-grid1", 150, 10, 15);
var anakin = new character("Anakin Skywalker", "https://media1.giphy.com/media/Ii3yAgfTEHPd6/200w.gif#22-grid1",175, 8, 30);
var grevious = new character("General Grevious", "https://media2.giphy.com/media/kAUgtSozkruPC/200.gif#0-grid1",100, 20, 20);
var windu = new character("Mace Windu", "https://media0.giphy.com/media/3ornjTfcat9eNI1wg8/200.gif#2-grid1",200, 15, 25);

var charArray = [obiWan, anakin, grevious, windu];
var value;
var index;
var newDiv = $("<div>");
var nameP = $("<p>");
var healthP = $("<p>");
var newImg = $("<img>");

// Give each character a value of i + 1

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
    $(this).attr("id", "indexRemove");
    $(".character").not(this).appendTo("#enemies");
    $(".character").not(this).addClass("enemyCharacter");
    $(".character").not(this).css("backgroundColor", "red");
    var value = ($(this).attr("value"));
    value = parseInt(value);
    if(value === 0) {
        charArray.splice(value, 1);
    }
    else if(value === 1) {
        charArray.splice(value, 1);
    }
    else if(value === 2) {
        charArray.splice(value, 1);
    }
    else if(value === 3) {
        charArray.splice(value, 1);
    }
    $(".character").off("click");
})


// #enemies is the parent element, .enemyCharacter is what we are removing
$("#enemies").on("click", ".enemyCharacter", function() {
    $(this).appendTo("#defender");
    if($("#defender").has(".enemyCharacter")) {
        $("#enemies").off("click");
    }
})

// Need an event for the attack button
// when pressed the user player takes damage from the enemy's counterAttack dmg
// the enemy takes damage from the user damage
// the user character will gain attack += attack on each button press
// if user HP drops below 0, game over
// if enemy HP drops below 0, remove them

















