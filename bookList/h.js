// function dec2bin(dec){
//     return (dec >>> 0).toString(2);
// }
// let bin = dec2bin(5);
let n = 15;
let test = (n >>> 0).toString(2)
let a = test.split('');

console.log(a)
let maxarray = [];
let one = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] == '1') {
        one += 1;
        if (i == a.length - 1 && a[i] == '1') {
            maxarray.push(one);
        }
    } else {
        maxarray.push(one);
        one = 0;
    }
}
console.log(maxarray);
// let max = Math.max(...maxarray);
// console.log(max)



// const binaryArray = binary.split('');
// let maxOneHolder = [];
// let ones = 0;
// for(let i = 0; i< binaryArray.length; i++){
//     if(binaryArray[i] === '1'){
//         ones += 1;
//     if(i == binaryArray.length - 1 && binaryArray[i] == '1'){
//         maxOneHolder.push(ones);   
//     }
//     } else {
//         maxOneHolder.push(ones);
//         ones = 0;
//     }
// } 

// let max = Math.max(...maxOneHolder);
// console.log(max)