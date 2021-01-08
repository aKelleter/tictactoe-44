

// Déclarations et initialisation de VARIABLES GLOBALES 
// Signalé par un G majuscule en préfix

    // Init canvas and context
    let Gcanvas = document.getElementById("canvasGame");
    let Gctx = Gcanvas.getContext("2d");
    // Interval de raffraîchissement
    let Ginterval;


function initRun()
{
    // Eléments de l'application à mettre à jour 
    gameUpdate();

    // On efface le contenu du canvas entre chaque raffraîchissement  
    Gctx.clearRect(0, 0, Gcanvas.width, Gcanvas.height);  
    
    // Dessin
    gameDraw(); 
} 

function initLoad()
{  
    //console.log("Init done");
    gameLoad();    

    // Fréquence de raffraîchissement de l'écran 
    Ginterval = setInterval(initRun, 1 / 60);
}

function sleep(milliseconds)
{
    let date = Date.now();
    let currentDate = null;
    do
    {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

