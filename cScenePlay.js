class ScenePlay {

    constructor()
    {
        this.gameover = false;
        this.winner = 0;
        this.fontSizeGameOver = 1000;
        this.scoreP1 = 0;
        this.scoreP2 = 0;
        this.scoreP1open = true;
        this.scoreP2open = true;
    }

    init()
    {
        this.gameover = false;   
        this.fontSizeGameOver = 1000;    
        this.scoreP1open = true;
        this.scoreP2open = true;  
    }

    update()
    {
        if(GticTacToe.boardIsFull() && this.gameover == false)
        {
            this.winner = GticTacToe.boardGetWinner();
            this.gameover = true;           
            GticTacToe.boardReset();       

        }else if(this.gameover == true){   

            GticTacToe.boardReset();
            if(this.winner == 1 && this.scoreP1open){
                this.scoreP1++;
                this.scoreP1open = false;
            }else if(this.winner == 2 && this.scoreP2open){
                this.scoreP2++;
                this.scoreP2open = false;
            }
        }
    
    }

    draw()
    {
        // La grille de jeu
        GticTacToe.boardDraw();  

        this.drawScore();

        if(this.gameover)
        { 
            for(let x = 100 ; x > 30 ; x--)
            {
                sleep(1);
                if(this.fontSizeGameOver > 40)
                    this.fontSizeGameOver--;               
            }
            
            this.drawWinner();    
            //GticTacToe.playSoundWinner().soundPlay();                

            if(this.winner == 0)
                this.drawGameOver(this.fontSizeGameOver);             

            this.drawContinue();             
            
        }
    }

    drawGameOver(pSize)
    {
        Gctx.font = pSize + "px sans-serif";
        Gctx.fillStyle = "#000000";   
        Gctx.fillRect(0, (Gcanvas.height / 2) - 40, Gcanvas.width, 50);       
        Gctx.fillStyle = "#dfaa1a";       
        Gctx.fillText("GAME OVER", (Gcanvas.width - GticTacToe.getposX() - pSize*3) /2 , Gcanvas.height / 2);          
    }

    drawWinner()
    {
        let x = Gcanvas.width/2;
        let y = Gcanvas.height/2 - 100;
        let rayon = 50;
        let angleInitial = 0;
        let angleFinal = Math.PI + (Math.PI * 3) / 2;
        let antihoraire = false;
        
        Gctx.beginPath();
        Gctx.fillStyle = "#dfaa1a"; 
        Gctx.arc(x, y, rayon, angleInitial, angleFinal, antihoraire);
        Gctx.fill();

        Gctx.font = "20px sans-serif";
        Gctx.fillStyle = "#cc0000";  
        Gctx.fillText("PLAYER ", (Gcanvas.width - GticTacToe.getposX() +43) /2, 210);
        Gctx.fillStyle = "#000000";  
        Gctx.fillText(this.winner, (Gcanvas.width - GticTacToe.getposX() +110) /2, 230);
        Gctx.fillStyle = "#cc0000";
        Gctx.fillText("WIN", (Gcanvas.width - GticTacToe.getposX() +80) /2, 255);        
     }
    
     drawContinue()
     {
        Gctx.fillStyle = "#dfaa1a";
        Gctx.font = "16px sans-serif";
        Gctx.fillText(" - C L I C K   T O   R E P L A Y -", (Gcanvas.width - GticTacToe.getposX() - 120) /2, 580);
     }

     drawScore()
     {
        Gctx.font = "14px sans-serif";
        Gctx.fillStyle = "#dfaa1a";  
        Gctx.fillText("SCORE", (35), 130);
        Gctx.fillStyle = "#ffffff"; 
        Gctx.fillText("PLAYER 1", (28), 150);

        Gctx.fillStyle = "#3a8dc3"; 
        Gctx.font = "20px sans-serif";
        Gctx.fillText(this.scoreP1, (53), 180);

        Gctx.font = "14px sans-serif";
        Gctx.fillStyle = "#dfaa1a";  
        Gctx.fillText("SCORE", (555), 130);
        Gctx.fillStyle = "#ffffff"; 
        Gctx.fillText("PLAYER 2", (548), 150);

        Gctx.fillStyle = "#3a8dc3"; 
        Gctx.font = "20px sans-serif";
        Gctx.fillText(this.scoreP2, (573), 180);
        
     }

    clic(pX, pY)
    {
        GsceneManager.goToScene("play");
        if(this.gameover) {
            GsceneManager.goToScene("menu");         
        }else{            
            GticTacToe.boardClic(pX, pY);
            this.winner = GticTacToe.boardGetWinner(pX, pY);
            //console.log("Winner ", this.winner);
            if(this.winner != 0){
                this.gameover = true;               
            }
        }

    }
}