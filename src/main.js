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

let gameToggles = document.querySelectorAll(".game-toggle");
let gameContainer = document.querySelector("#game-container");
let gameController = document.querySelector("#game-controller");
let gamesList = document.querySelector("#games-list");

for (let i = 0; i < gameToggles.length; i++) {
    gameToggles[i].addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
    
        gameController.style.display = "block";
        gameContainer.src = this.getAttribute("game-url");
        gamesList.style.display = "none";
    
        return false;
    });
}

let gameBackButton = document.querySelector("#game-back-button");

if (gameBackButton != null) {
    gameBackButton.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        gameController.style.display = "none"
        gamesList.style.display = "block"
        gameContainer.src = ""
    
        return false;
    });
}
