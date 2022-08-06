/* How many buttons?*/
var numberOfButtons = document.querySelectorAll(".drum").length;

/* click */
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var wordClicked = this.innerHTML;
    checkKey(wordClicked);
    });
}   

/* which key */
function checkKey(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('/Users/ajomathew/Downloads/Drum Kit Starting Files/sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('/Users/ajomathew/Downloads/Drum Kit Starting Files/sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('/Users/ajomathew/Downloads/Drum Kit Starting Files/sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('/Users/ajomathew/Downloads/Drum Kit Starting Files/sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('/Users/ajomathew/Downloads/Drum Kit Starting Files/sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('/Users/ajomathew/Downloads/Drum Kit Starting Files/sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('/Users/ajomathew/Downloads/Drum Kit Starting Files/sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(wordInsideButton);
            break;
    }
}

/* key press */
document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    checkKey(keyPressed);
});