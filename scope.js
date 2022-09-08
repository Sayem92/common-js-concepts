function add (a,b){
    const total = a+b
    if(b > 5){
        const sum = 25 + a+ b
    }
    else{
        const sum = 3 +a +b
        var current = sum
    }
    console.log(current)      // hoisting type a hoy var tai not use
    // console.log(sum)         // aita baire milbe na
    return total
}





// block scope ta global scope a pawa jay na
// block  scope baire console log a pay na 
// console.log(total)
add(5,3)