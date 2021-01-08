class SceneMenu {

    constructor()
    {

    }

    init()
    {
        
    }

    update()
    {

    }

    draw()
    {
        Gctx.font = "30px Verdana";
        Gctx.fillStyle = "#dfaa1a";
        Gctx.fillText("CLICK TO START", (Gcanvas.width - GticTacToe.getposX() - 140)/2, Gcanvas.height / 2);
    }

    clic(pX, pY)
    {
        // Nothing to do actually       
        GsceneCurrent = GscenePlay;
    }
}