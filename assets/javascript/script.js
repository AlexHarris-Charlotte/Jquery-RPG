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

// Give each character a value of i + 1

for(var i = 0; i < charArray.length; i++) {
    var newDiv = $("<div>");
    var nameP = $("<p>");
    var healthP = $("<p>");
    var newImg = $("<img>");
    newDiv.attr("id", "character" + i);
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
    $(".character").not(this).remove();
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
    
    for(var i = 0; i < charArray.length; i++) {
    var newDiv = $("<div>");
    var nameP = $("<p>");
    var healthP = $("<p>");
    var newImg = $("<img>");
    newDiv.attr("id", "character" + i);
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
    $("#enemies").append(newDiv);
}
})















