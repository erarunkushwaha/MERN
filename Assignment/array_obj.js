






/**
 * Q5. Understanding the concept of object. Here ‘myObj’ is object and ‘a’ is the property of the object and
‘1’ is the value of the property.

*Print the following myObj in the console
a: 1
b: 2
c: 3
d: 4
 */

console.log('\n------- this is Q.N 5 ------------------');
tryObj();
function tryObj() {
    let myObj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }
    for (i in myObj) {
        console.log(i + ": " + myObj[i]);

    }
}

/**Q6. Here we ‘myObj’ is object and ‘apple is the property of the object and ‘red is the value of the
property.
myObj = {
 apple:"red",
 ball:"round",
 cat:"meow",
 dog:"bone"
}
*Print the following myObj in the console
red
round
meow
bone
*/

console.log('\n------- this is Q.N 6 ------------------');
printVal();
function printVal() {
    let myObj = {
        apple: "red",
        ball: "round",
        cat: "meow",
        dog: "bone"
    }
    for (i in myObj) {
        console.log(myObj[i])
    }
}

/**
 * 7. Understanding the concept of string and array. Change the following string into Array.
                let myName = "my name is jack sparrow"
                ["my","name","is","jack","sparrow"]
 */
console.log('\n------- this is Q.N 7 ------------------');
strToArr();
function strToArr(){
    let myName = "my name is jack sparrow";
    stringArray = myName.split(" ");
    console.log(stringArray);
}

/**
 * Q8. Obtain the following output
    let myName = "my name is jack sparrow"
    o/p
                ["m",
                "y",
                " ",
                "n",
                "a",
                "m",
                "e",
                " ",
                "i",
                "s",
                " ",
                "j",
                "a",
                "c",
                "k",
                " ",
                "s",
                "p",
                "a",
                "r",
                "r",
                "o",
                "w"
                ]

 */

console.log('\n------- this is Q.N 8 ------------------');
let myName = "my name is jack sparrow";
  array = myName.split('');
  console.log(array);


/**Q9. Populate the myObj dynamically.
        let myObj = {};
        let a = "apple";
        let b = "red";
        let c = "ball";
        let d = "round";
        let e = "cat";
        let f = "meow";
        let g = "dog";
        let h = "bone"; 
        */
console.log('\n------- this is Q.N 9 ------------------');

     let myObj = {};
        let a = "apple";
        let b = "red";
        let c = "ball";
        let d = "round";
        let e = "cat";
        let f = "meow";
        let g = "dog";
        let h = "bone";
    myObj[a] = b;
    myObj[c] = d;
    myObj[e] = f;
    myObj[g] = h;
    console.log(myObj); 
/**
 * 
 * Q10. Obtain the following output
        input
        let myString = `hi hi hi hello hello hello ram ram ram shyam ram shyam ram ram ram shyam`;
                output
                {
                hi:3,
                hello:4,
                ram:7,
                shyam:3
                }
 */

console.log('\n------- this is Q.N 10 ------------------');
let myString = `hi hi hi hello hello hello ram ram ram shyam ram shyam ram ram ram shyam`;
findProperty(myString);
function findProperty(string){
    let strArr = myString.split(' ');
    let myObj ={};

    for(let i=0; i<strArr.length; i++){
       if( myObj.hasOwnProperty(strArr[i])){
        //    myObj[strArr[i]] = myObj[strArr[i]] + 1;
          myObj[strArr[i]] += 1;
   
       } else {
        myObj[strArr[i]] = 1;
       }

    }
    console.log(myObj);

}
