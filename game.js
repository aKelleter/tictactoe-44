// Déclarations et initialisation de VARIABLES GLOBALES 
// Signalé par un G majuscule en préfix

// Instanciation du plateau de jeu    
let GticTacToe = new Board(Gcanvas.width, Gcanvas.height);

// instanciation du gestionnaire de scènes
let GsceneManager = new SceneManager();

// Instanciation des scènes
let GsceneMenu = new SceneMenu();
let GscenePlay = new ScenePlay();

let GsceneCurrent = GsceneMenu;
  
function gameLoad()
{
    // Ajout de Listeners
    
    // Clavier
    // Ajouter une écoute sur l'évènement "keydown" on appelle notre fonction keyDown 
    // et on signale avec le false que c'est notre code qui prend la main et que le navigateur ne doit pas exécuter cet évènement
    // ex.: l'appui sur la flèche du bas ne vas pas faire scroller la page, elle fera ce que le code lui fait faire
    document.addEventListener("keydown", KTKeyDownHandler, false);
    // Idem pour keyup
    document.addEventListener("keyup", KTKeyUpHandler, false);

    // Tactile
    document.addEventListener("touchStart", KTTouchStartHandler, false);
    document.addEventListener("touchEnd", KTTouchEndHandler, false);

    // Gestion de la souris
    Gcanvas.onmousedown = KTMouseDown;
    Gcanvas.onmouseup = KTMouseUp;   
}

function gameUpdate()
{
    GsceneCurrent.update();
}

function gameDraw()
{   
    GsceneCurrent.draw();
}



