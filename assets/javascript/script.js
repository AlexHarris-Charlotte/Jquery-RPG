// Object Constructor
function character(name, image, health, attackPower, counterAttack) {
    this.name = name;
    this.image = image;
    this.health = health;
    this.attackPower = attackPower;
    this.counterAttack = counterAttack;
} 


// Character Objects
// Object and array Values are mutable.
// When restarting the game, the values will be modified from combat
// The state of the object's values are modified.
// How the hell do I get back to the original state??
//object.freeze -- maybe use this to assign to a variable and use it when call
// on startgame state
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

var objectCopyObi = Object.assign({}, obiWan);
var objectCopyAnakin = Object.assign({}, anakin);
var objectCopyGrevious = Object.assign({}, grevious);
var objectCopyWindu = Object.assign({}, windu);

function startGameState()  {
    var copyArray = [objectCopyObi, objectCopyAnakin, objectCopyGrevious, objectCopyWindu];

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
    $(".character").on("click", function() {
        $(this).attr("id", "player");
        $(".character").not(this).appendTo("#enemies");
        $(".character").not(this).addClass("enemyCharacter");
        $(".character").not(this).css("backgroundColor", "red");
        $(".character").off("click");
        console.log($("#defender").children().length);
    })
}
startGameState();


$("#enemies").on("click", ".enemyCharacter", function(){
    $(this).attr("id", "enemySelected");
    console.log("ID added");
})

$("#enemies").on("click", ".enemyCharacter", function(){
    enemySelected();
});

var objectCopyObi = Object.assign({}, obiWan);
objectCopyObi.health = obiWan.health;
objectCopyObi.attackPower = obiWan.attackPower;
var objectCopyAnakin = Object.assign({}, anakin);
objectCopyAnakin.health = anakin.health;
objectCopyAnakin.attackPower = anakin.attackPower;
var objectCopyGrevious = Object.assign({}, grevious);
objectCopyGrevious.health = grevious.health;
objectCopyGrevious.attackPower = grevious.attackPower;
var objectCopyWindu = Object.assign({}, windu);
objectCopyWindu.health = windu.health;
objectCopyWindu.attackPower = windu.attackPower;

var copyArray = [objectCopyObi, objectCopyAnakin, objectCopyGrevious, objectCopyWindu];

function enemySelected() {
    var copyArray = [objectCopyObi, objectCopyAnakin, objectCopyGrevious, objectCopyWindu];
    
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
            playerCharacter = copyArray[playerValue];
            enemyCharacter = copyArray[enemyValue];
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
                        $("#player").remove();
                        // allows first pass through to work.
                        var objectCopyObi = Object.assign({}, obiWan);
                        var objectCopyAnakin = Object.assign({}, anakin);
                        var objectCopyGrevious = Object.assign({}, grevious);
                        var objectCopyWindu = Object.assign({}, windu);
                        copyArray = [objectCopyObi, objectCopyAnakin, objectCopyGrevious, objectCopyWindu];
                        startGameState();
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


