function initRaters(){
    let raters = Array.from(document.getElementsByClassName("rate_box"));
    
    raters.forEach(box => {
        console.log(box);
        i = 0;
        Array.from(box.childNodes).forEach(star => {
            if(star.tagName == "SPAN"){
                i++;
                star.addEventListener("mouseenter", i => this.voteA(i) )
            }
        });
    });

}

function voteA(score){
    console.log(score.i);
}

initRaters();
