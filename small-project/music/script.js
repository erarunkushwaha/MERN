window.addEventListener('keydown',playMusic);

function playMusic(event){
   // console.log(event);
    let mus = document.getElementById(event.keyCode);
   // console.log(mus.parentElement.classList);
     mus.parentElement.classList.toggle('play')
    mus.currentTime = 0;
    mus.play();
}