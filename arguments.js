// arguments array like object 
// not push
// not pop
// not alllow map filter forEach find

// only allow to block scope
// for loop allow

function sum (a,b,c){
    const total = a+b+c
    const args = [...arguments]
    // console.log(args)
    // console.log(arguments)
    // console.log(arguments[5])
    // console.log(typeof arguments)
    return total
}

// console.log(arguments)               // only allow to block scope

const result = sum(4, 6, 10, 85, 56, 99)
// console.log(result)
//  console.log(sum)            // [Function: sum]
   console.log(sum.length)      // means parameter koyta