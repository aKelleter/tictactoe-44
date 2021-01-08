class Sound {
    
    constructor(pSrc)
    {
        this.audio = document.createElement("audio");
        this.audio.src = pSrc;
        this.audio.setAttribute("preload", "auto");
        this.audio.setAttribute("controls", "none");
        this.audio.setAttribute("allow", "autoplay");
        this.audio.style.display = "none";
        document.body.appendChild(this.audio);
    }

    soundPlay ()
    {
        this.audio.currentTime = 0;
        this.audio.pause();
        this.audio.play();
    }
    
}