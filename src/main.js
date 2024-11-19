/*
let div = document.querySelector("#header a");
        
div.innerHTML = div.textContent.replace(/\S/g, "<span class='letter' style='display: inline-block'>$&</span>");

let timeline = anime.timeline({
    loop: false,
    autoplay: true
});

timeline.add({
duration: 1000,
delay: (el, i) => 70*i,
endDelay: 500
});

timeline.add({
    targets: 'div .letter',
    scale: [4,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i,
    endDelay: 500
});
*/

let gameToggle = document.querySelector(".game-toggle");
let gameContainer = document.querySelector("#game-container");
gameToggle.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    gameContainer.style.display = "block";
    gameContainer.src = this.href;
    this.style.display = "none";

    return false;
});