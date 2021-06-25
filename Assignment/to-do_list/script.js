
let myButton = document.querySelector('button');
let parentOl = document.querySelector('ol');
 myButton.addEventListener('click', getValue)
let i = 1;
let myObj = {};
// console.log(myObj);
function getValue()  {
  let input = document.querySelector('input')
  let str = input.value;
      if (str) {
        input.value = '';
        appendValue(str);
      } 
 console.log(getObject(str));
}

function appendValue(str) {
  let li = document.createElement('input')
   li.value = str;
   parentOl.appendChild(li)
  
}

function getObject(str){
  myObj[str] = i++;
  return myObj;
}