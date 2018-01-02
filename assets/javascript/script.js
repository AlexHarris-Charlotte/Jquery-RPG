// Pseudocode
// Need a constructor to make objects for each character
// can store characters in an array
// Use jquery to append characters to a div on the page
//  
//  adf
//  adf

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

for(var i = 0; i < charArray.length; i++) {
    $("")
}
