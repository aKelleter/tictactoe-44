class Board {

    constructor(pX, pY)
    {
        this.tailleCase = 100;
        this.nbLigne = 4;
        this.nbColonne = 4;

        this.posX = pX/2 - ((this.tailleCase * this.nbColonne) /2);
        this.posY = pY/2 - ((this.tailleCase * this.nbLigne) /2);

        this.errorSound = new Sound ("snd/error.wav");
        this.winnerSound = new Sound ("snd/winner.wav");
 

        // Initialisation de la grille nbLigne x nbColonne
        this.grille = new Array(this.nbLigne);
        for(let i = 0 ; i < this.nbColonne ; i++)
        {
            this.grille[i] = new Array(this.nbColonne);
        }

        this.joueur = 1;
        this.listePions = [];
        
        this.resetGrille();
    }

    
    // ----------------------------------------------------------------------------------------------------------
    // PUBLIC METHODS
    // ----------------------------------------------------------------------------------------------------------

    
    getposX()
    {
        return this.posX;
    }
    
    getposY()
    {
        return this.posY;
    }

    playSoundWinner()
    {
        return this.winnerSound;
    }

    boardClic(pX, pY)
    {
        let c = Math.floor((pX - this.posX) / this.tailleCase);
        //console.log("Colonne ", c);

        let l = Math.floor((pY - this.posY) / this.tailleCase);
        //console.log("Colonne ", l);

        if((l >= 0  && l < this.nbLigne) && (c >= 0  && c < this.nbColonne))
        {
            let v = this.grille[l][c]
            // Si il n'y a rien dans la grille
            if(v == 0)
            {
                this.grille[l][c] = this.joueur;
                let spriteX = this.posX + (this.tailleCase * c)
                let spriteY = this.posY + (this.tailleCase * l)
                let pion;

                if(this.joueur == 1){          
                    pion = new Sprite("img/croix.png", spriteX, spriteY);
                    this.joueur = 2;
                }else{
                    pion = new Sprite("img/rond.png", spriteX, spriteY);                  
                    this.joueur = 1;
                }
                this.listePions.push(pion);
            }else
                this.errorSound.soundPlay();
            
        }/*else
            //console.log("Clic en dehors du tableau");
         */    
    }

    boardDraw()
    {
        let longueur = this.tailleCase * this.nbColonne;

        Gctx.strokeStyle = "#42c0f2";
        Gctx.lineWidth = "3";
        Gctx.lineCap = "round";
        Gctx.lineJoin = "round";
        
        // Lancement d'un nouveau Path
        Gctx.beginPath();

        // Lignes du cadre externe
        Gctx.moveTo(this.posX, this.posY);
        Gctx.lineTo(this.posX + longueur, this.posY);
        Gctx.lineTo(this.posX + longueur, this.posY + longueur);
        Gctx.lineTo(this.posX, this.posY + longueur);
        Gctx.lineTo(this.posX, this.posY);

        // Lignes internes
            // Verticales
                Gctx.moveTo(this.posX + this.tailleCase, this.posY);
                Gctx.lineTo(this.posX + this.tailleCase , this.posY + longueur);
                Gctx.moveTo(this.posX + this.tailleCase * 2, this.posY);
                Gctx.lineTo(this.posX + this.tailleCase * 2, this.posY + longueur);
                Gctx.moveTo(this.posX + this.tailleCase * 3, this.posY);
                Gctx.lineTo(this.posX + this.tailleCase * 3, this.posY + longueur);
            // Horizontales
                Gctx.moveTo(this.posX , this.posY + this.tailleCase);
                Gctx.lineTo(this.posX + longueur, this.posY + this.tailleCase);
                Gctx.moveTo(this.posX , this.posY + this.tailleCase * 2);
                Gctx.lineTo(this.posX + longueur, this.posY + this.tailleCase * 2);
                Gctx.moveTo(this.posX , this.posY + this.tailleCase * 3);
                Gctx.lineTo(this.posX + longueur, this.posY + this.tailleCase * 3);

        // Affiche le cadre et les lignes internes
        Gctx.stroke();

        // Affichage des pions
        this.listePions.forEach(p => {
            p.spriteDraw();
        });

        // Affichage du texte
        Gctx.fillStyle = "#dfaa1a";  
        Gctx.font = "30px sans-serif";
        Gctx.fillText("The player ", (Gcanvas.width - GticTacToe.getposX() - 200)  / 2, 55);
        Gctx.fillStyle = "#ffffff"; 
        Gctx.fillText(this.joueur, (Gcanvas.width - GticTacToe.getposX() + 105)  / 2, 55);
        Gctx.fillStyle = "#dfaa1a"; 
        Gctx.fillText(" must play", (Gcanvas.width - GticTacToe.getposX() + 140)  / 2, 55);
        Gctx.fillStyle = "#dfaa1a"; 
    }

    boardIsFull()
    {
        
        for(let l = 0 ; l < this.nbLigne ; l++)
        {
            for(let c = 0 ; c < this.nbColonne ; c++)
            {
                
                if(this.grille[l][c] == 0){
                    return false;
                }
            }            
        }
        return true;

    }

    boardReset()
    {
        // Réinitialisation de la liste de pions
            this.listePions = new Array();
        // Rénitialisation de la grille
            this.resetGrille();     
        // Réinitialisation du joueur
            this.joueur = 1;   
    }

    boardGetWinner(pX, pY)
    {
              
        let winnerLine = 0;
        let winnerCol = 0;
        let winnerDiag = 0;
        let pos = 0;

        let c = Math.floor((pX - this.posX) / this.tailleCase);
        //console.log("Colonne ", c);

        let l = Math.floor((pY - this.posY) / this.tailleCase);
        //console.log("Colonne ", l);

        // Si je suis dans la grille
        if((l >= 0  && l < this.nbLigne) && (c >= 0  && c < this.nbColonne))
        {
            //console.log("x/y ", l, c);
            pos = l.toString() + c.toString();
            //console.log("Pos ", pos);

            winnerLine = this.checkline(l);
            winnerCol = this.checkColonne(c);
            winnerDiag = this.checkDiagonal();
        }

        if(winnerLine != 0)
            return winnerLine;
        else if(winnerCol != 0)
            return winnerCol;
        else if(winnerDiag != 0)
            return winnerDiag;
        else
            return 0;
        
        
    }

    // ----------------------------------------------------------------------------------------------------------
    // PRIVATE METHODS
    // ----------------------------------------------------------------------------------------------------------

    resetGrille()
    {
        for(let l = 0 ; l < this.nbLigne ; l++)
        {
            for(let c = 0 ; c < this.nbColonne ; c++)
            {
                this.grille[l][c] = 0;
            }            
        }
    }

      
    checkline(numLine)
    {
                
        let line = new Array();
        let resultat = 0;

        // Boucle d'assignation
        for(let c = 0 ; c < this.nbColonne ; c++)
        {
            line[c] = this.grille[numLine][c];
        }

        resultat = this.getTheWinner(line);

        return resultat;
    }

    checkColonne(numCol)
    {
        
        let col = new Array();
        let resultat = 0;

        // Boucle d'assignation
        for(let l = 0 ; l < this.nbLigne ; l++)
        {
            col[l] = this.grille[l][numCol];
        }

        resultat = this.getTheWinner(col);

        return resultat;

    }

    checkDiagonal()
    {
        
        let rtl = new Array()
        let ltr = new Array();
        let resultat = 0;
        
        // Diagonale Left to right (ltr)
        for(let l = 0 ; l < this.nbColonne ; l++)
        {
            ltr[l] = this.grille[l][l];     
            //console.log("element ",this.grille[l][l]);       
        }

        //console.table(ltr);
        resultat = this.getTheWinner(ltr);
        

        if(resultat == 0)
        {
            // Diagonale Right to Left (rtl)
            let eol = this.nbColonne - 1;
            for(let l = 0  ; l < this.nbColonne ; l++)
            {
                rtl[l] = this.grille[l][eol];
                eol--;
            }

            resultat = this.getTheWinner(rtl);
            //console.table(rtl);            

        } 

        return resultat;

    }

    getTheWinner(pList)
    {
        
        let j1 = 0;
        let j2 = 0;     
        let winner = 0;

        // Boucle de comptage
        for(let c = 0 ; c < this.nbColonne ; c++)
        {
            if(pList[c] == 1)
                j1++; 
                                        
            if(pList[c] == 2)
                j2++;
        }

        // Tests du gagnant            
        if(j1 == this.nbColonne)
            winner = 1;
        else if(j2 == this.nbColonne)
            winner = 2;
        

        if (winner == 1 || winner ==2)
            return  winner;
        else
            return 0;
    }
   
} // End of Class