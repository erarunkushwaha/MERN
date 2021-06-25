window.addEventListener('keydown',findText);
let result = document.querySelectorAll('.r');
function findText(event){
    result[0].innerHTML = event.keyCode;
    result[1].innerHTML  = event.key;
   result[2].innerHTML  = event.location;
   result[3].innerHTML =  event.which;
    result[4].innerHTML = event.code;
}