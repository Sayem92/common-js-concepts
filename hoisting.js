// for(let i = 0 ; i < 5 ; i++){
//     console.log(i)
// }
// console.log('outside', i)


// var dile baire log hoy hoisting ar jonno
// let / const dile error baire mile na

print5()
 print10()     // aikane sudu print ance ar function k ane nai tai undefined
console.log(print)
function print5(){
    console.log('inside print ', 5)
}
var print =function print10(){
    console.log('inside print ', 5)
}