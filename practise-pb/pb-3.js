// Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third parameter will be a string) that will perform arithmetic operation depending on the third parameter and  will print the result. For example:

//     1. Print result of num1+num2 if operation is “add”
//     2. Print result of num1-num2 if operation is “subtract”
//     3. Print result of num1*num2 if operation is “multiply”
//     4. Print result of num1/num2 if operation is “divide”
//     5. Print result of num1%num2 if operation is “modulus”
//     6. Else print “Invalid operation”

const doSomething=(num1, num2, num3)=>{
    if(typeof num3 === 'string'){
        const result = num1 % num2
            return result;
    }
}
// console.log(doSomething(8,7,'add'))       // 15       

// console.log(doSomething(8,7,'subtract'))    // 1

// console.log(doSomething(8,7,'multiply'))     // 56

// console.log(doSomething(80,7,'divide'))     // 11.428571428571429

// console.log(doSomething(18,7,'modulus'))    // 4

