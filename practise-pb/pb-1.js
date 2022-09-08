// 1) If I write []==true,will it show true or false? Check it out.

// 2) Use === to check if the true === "true" gives true or false.

// 3) Write an arrow function that will take a parameter and will check if the
// parameter is a number or not by using isNaN(). And return true or false.

//--------------------------------------------------------------------------------------------------------------------------------------------------------


// const a = []
// const b = true
// they are not equal


// const a = true
// const b = "true"
// they are not equal

// if(a === b){
//     console.log('they are equal')
// }else{
//     console.log('they are not equal')
// }


 
const check= (x) =>{
    if(typeof x === 'number'){
        return true
    }
    else{
        return false
    }

}
const output = check("5")
console.log(output)