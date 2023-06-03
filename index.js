//Detectar los clicks en los botones
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

//Detectar las teclas presionadas
document.addEventListener("keypress", handleKeyPress);

//Gestionar los clicks
function handleClick() {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//Gestionar las teclas presionadas
function handleKeyPress(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}

//Sonidos asignados a las letras
function makeSound(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;

        case "a":
            const crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        
        case "s":
            const tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;

        case "d":
            const kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;

        case "j":
            const tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;

        case "k":
            const snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;

        case "l":
            const tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;

        default:
            alert("Chose a valid letter!");
            break;
    }
}

//Animación para los botones presionados
function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}