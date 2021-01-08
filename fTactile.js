
function KTTouchStartHandler(e)
{
    //console.log("Touch Start");
    let rect = Gcanvas.getBoundingClientRect(); 
    let x = e.targetTouches[0].clientX - rect.left;
    let y = e.targetTouches[0].clientY - rect.top;
    gameClickDown(x, y);

}

function KTTouchEndHandler(e)
{
    //console.log("Touch End");
}
