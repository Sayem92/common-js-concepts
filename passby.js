const num1 = 2;
const num2 = 15;

function multiply(a,b){
    a = 5
    const result = a* b
    return result
}

// aita man change hobe na karon aita primitive type tai ----------

 console.log(num1)
const output = multiply(num1,num2)
 console.log(num1)




// object and array are pass by reference-------------
// array and new paremeter aki jinis refer kore tai change hoice

///             aita just       non-primitive       a jonno-------

const student1 = {name : 'Jalil', partner : 'Borsha'}
const student2 = {name : 'Raj', partner : 'Anika'}

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto'
}

console.log(student1)               //{ name: 'Jalil', partner: 'Borsha' }
makeMovie(student1, student2)
console.log(student1)               //{ name: 'Ononto', partner: 'Borsha' }