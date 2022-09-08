/* 
8 way to get undefined

1. variable that is not initialized will give undefined 
2. function with no return
3. parameter that is not passed will be undefined 
4. if return nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array element outside of the index  range
7. deleting an element inside an array
8. set a value directly to undefined
*/


let first 
// console.log(first)                  

function second(a,b){
    const total = a+ b
} 
const result = second()
// console.log(result)  



function third(a,b,c,d){
    const total = a+b+c+d
    // console.log(a,b,c,d)
} 
third(5,9)


function noNagative(a,b){
    if(a<0 || b< 0){
        return                              // ki return ta nai ai jonno
    }
    return a+b
}
const total = noNagative(3, -5)
// console.log(total)


const fifth = {id: 2, name: 'ponchom', job: 'guide'}
// console.log(fifth.job, fifth.salary)


const sixth = [1, 5, 9, 7, 55, 99, 100]
// console.log(sixth[1],sixth[3],sixth[200])


const seven = [1, 5, 9, 7, 55, 99, 100]

// you should not do it. instead use splice

delete seven[1]         // [ 1, <1 empty item>, 9, 7, 55, 99, 100 ]
// console.log(seven)


const eighth = undefined;

const ninth = null;

const data = {results:[], updated: null}

// console.log(typeof undefined)           // undefined

console.log(typeof null)                //  object


                     