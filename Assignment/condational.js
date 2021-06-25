function checkMe(num){
    let res = typeof(num);
    console.log(res)
    if(res == "number" && num >= 0){
        console.log(num + ": is +ve number")
    } else if(res == "number" && num < 0){
        console.log(num + ": is -ve number")
    } else if(res == "string"){
        console.log(num + ": is string")

    } else if(res == "boolean"){
        console.log(num + ": is boolean")

    } else {
        console.log("This is some thing else")
    }
}

checkMe(false)