window.addEventListener('keydown',playMusic);

function playMusic(event){
    let mus = document.getElementById(event.keyCode);
    mus.parentElement.classList.toggle('play')
    mus.currentTime = 0;
    mus.play();
}