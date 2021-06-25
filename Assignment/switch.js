function checkMe(num) {
    let res = typeof (num);
    
    switch (res) {
        case "number":
            console.log(num + ": is number")
            break;

        case "string":
            console.log(num + ": is string")
            break;

        case "boolean":
            console.log(num + ": is boolean")
            break;

        default:
            console.log(num + ": is something else")
            break;


    }
}

checkMe()