function KTMouseDown(e)
{
    let rect = Gcanvas.getBoundingClientRect(); 
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    KTClickDown(x, y);
    //console.log("Mouse Down");
}

function KTMouseUp(e)
{
    let x = e.clientX;
    let y = e.clientY;
    KTClickUp(x, y);
    //console.log("Mouse Up");
}

function KTClickDown(pX, pY)
{
    //console.log("Click à ", pX,  pY);
    GsceneCurrent.clic(pX, pY); 
}

function KTClickUp(pX, pY)
{

}