
class Sprite {

    constructor(pImg, pX = 0, pY = 0)
    {
        this.img = new Image();
        this.img.src = pImg;
        this.x = pX;
        this.y = pY;

    }

    spriteDraw()
    {
        Gctx.drawImage(this.img, this.x, this.y);
    }

    spriteSetX(pX)
    {
        this.x = pX;
    }

    spriteSetY(pY)
    {
        this.y = pY;
    }

}

