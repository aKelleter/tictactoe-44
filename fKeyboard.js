// Gestion du clavier

// Codes clavier
let kbCodes = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    escape: 27,
    espace: 32
};

// Initialisation de l'état des touches
let keyRightPressed = false;
let keyLeftPressed = false;
let keyUpPressed = false;
let keyDownPressed = false;
let keyEscapePressed = false;


function KTKeyDownHandler(e)
{

    //DEBUG// 
    console.log("Key Down ", e.keyCode);
    
    if(e.keyCode == kbCodes.right) {
        keyRightPressed = true;
    }else if(e.keyCode == kbCodes.left) {
        keyLeftPressed = true;
    }else if(e.keyCode == kbCodes.up) {
        keyUpPressed = true;
    }else if(e.keyCode == kbCodes.down) {
        keyDownPressed = true;
    }else if(e.keyCode == kbCodes.escape) {
        keyEscapePressed = true;
    }else if(e.keyCode == kbCodes.espace) {
        keyEspacePressed = true;
    }

    // Indique à l'agent utilisateur que si l'événement n'est pas traité explicitement,
    // son action par défaut ne doit pas être prise en compte comme elle le serait normalement
    e.preventDefault();
}

function KTKeyUpHandler(e)
{
    if(e.keyCode == kbCodes.right) {
        keyRightPressed = false;
    }else if(e.keyCode == kbCodes.left) {
        keyLeftPressed = false;
    }else if(e.keyCode == kbCodes.up) {
        keyUpPressed = false;
    }else if(e.keyCode == kbCodes.down) {
        keyDownPressed = false;
    }else if(e.keyCode == kbCodes.escape) {
        keyEscapePressed = false;
    }else if(e.keyCode == kbCodes.espace) {
        keyEspacePressed = false;
    }

     e.preventDefault();
}