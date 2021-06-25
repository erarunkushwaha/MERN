/**
 *                                      1. .length()
                                        2. .indexOf()
                                        3. .lastIndexOf()
                                        4. .indexOf(param1,param2) // with two parameters
                                        5. slice(start, end)// try with -ve values also
                                        6. slice(start)
                                        7. substring(start, end)// try with -ve values also
                                        8. substring(start)
                                        9. substr(start, length)// try with -ve values also
                                        10. substr(start)
                                        11. .search()
                                        12. replace() // try /g and /i also
                                        13. touppercase()
                                        14. tolowercase()
                                        15. concat() ///try concatenating using + also
                                        16. trim()
                                        17. padStart()
                                        18. padEnd()
                                        19. Conditional statements
                                        Write a program to check if the given number is +ve, -ve,
                                        string,boolean etc (variable types) using if else condition and
                                        switch
 */

// 1
let text = "This sentence for experiment purpose";
let num = text.length
console.log("1---->"+num);


// 2
let text2 = "This sentence for experiment purpose";
let num2 = text2.indexOf('for');
console.log("2---->"+num2)

//3
let text3 = "This sentence for experiment purpose for no sence";
let num3 = text3.lastIndexOf('for');
console.log("3---->"+num3)

//4
let text4 = "This sentence for experiment purpose for no sence";
let num4 = text4.indexOf('for',15);
console.log("4---->"+num4)

//5
let text5 = "This sentence for experiment purpose for no sence";
let res5 = text5.slice(5,28);
let res5a = text5.slice(5,-5);
console.log("5---->"+res5)
console.log("5---->"+res5a)


//5
let text6 = "This sentence for experiment purpose for no sence";
let res6 = text6.slice(6);
console.log("6---->"+res6)


//7
let text7 = "This sentence for experiment purpose for no sence";
let res7 = text7.substring(5,28);
let res7a = text7.substring(5,-5);
console.log("7---->"+res7)
console.log("7---->"+res7a)

//8
let text8 = "This sentence for experiment purpose for no sence";
let res8 = text8.substring(5);
console.log("8---->"+res8)


//9
let text9 = "This sentence for experiment purpose for no sence";
let res9 = text9.substr(5,28);
let res9a = text9.substr(-5);
console.log("9---->"+res9)
console.log("9---->"+res9a)


//10
let text10 = "This sentence for experiment purpose for no sence";
let res10 = text10.substr(5);
console.log("10---->"+res10)


//11
let text11 = "This sentence for experiment purpose for no sence";
let res11 = text11.search('for');
console.log("11---->"+res11)

//12
let text12 = "This sentence for experiment purpose for no sence";
let res12 = text12.replace('for' ,'zzzzzzzzz');
console.log("12---->"+res12)
let res12a = text12.replace(/Experiment/i ,'banana');
console.log("12---->"+res12a)
let res12b = text12.replace(/for/g ,'yyyyy');
console.log("12---->"+res12b)

//13
let text13 = "This sentence for experiment purpose for no sence";
let res13 = text13.toLowerCase();
console.log("13---->"+res13)

//14
let text14 = "This sentence for experiment purpose for no sence";
let res14 = text14.toUpperCase();
console.log("14---->"+res14)

//15
let text15 = "This sentence for";
let test = "experiment purpose for no sence";
let res15 = "hello ".concat(text15,test);
let res15a = "hello " + " i am arun";
console.log("15---->"+res15)
console.log("15---->"+res15a)

//16
let text16 = "          This sentence        for           ";
let res16 = text16.trim()
console.log("16---->"+res16)


//17
let text17 = "5";
let res17 = text17.padStart(7,8);
console.log("17---->"+res17)

//18
let text18 = "5";
let res18 = text18.padEnd(7,8);
console.log("18---->"+res18)






