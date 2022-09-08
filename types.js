//strongly types language

// decleare ar age type ta bole dite hoy
// int a = 5;
//string b = 'sayem'
//object c = {name: 'sayem', id : 125}



// JavaScrip dynamic language

// primitive type
const a = 5;
const b = 'samad';
const c = true;


// non-primitive type
const age = [12, 12, 25, 52, 52]
const friend = {name: 'sayem', id : 125}

// let x = 5;
// let y = x;
// console.log(x,y)                        // 5 5
// y = 7;
// console.log(x,y)                    // 5 7



// non primitive gula refer dore rake
let x = {job: 'web developer'}
let y = x

y.job = 'backhand job'             //{ job: 'backhand job' } { job: 'backhand job' }
console.log(x,y)               //{ job: 'web developer' } { job: 'web developer' }
