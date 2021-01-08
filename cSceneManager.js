
class SceneManager
{
    constructor()
    {

    }

    goToScene(pScene)
    {
        switch (pScene) {
            case "play":
                GsceneCurrent = GscenePlay;
                break; 
            case "menu":
                GsceneCurrent = GsceneMenu;
                break;
            default:
                break;
        }  
        // Lancement de la méthode init de la scène en cours  
        GsceneCurrent.init();
    }
}