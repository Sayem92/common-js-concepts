// const first = 2;
// const second = 2;
// == and === aita and true


// const first = 2;
// const second = '2';
// == dile true
// === dile false-----aita type check kore


// const first = 1;
// const second = true;
// == dile bole equal
//  === dile bole not equal
// boolean true= 1  , false = 0  aita dore tai amon

// const first = '1';
// const second = true;
// aita k bole type coercion,  type conversion,  type casting

//----------------------------------------------------------------------------------------------------------------------------------------

// const first = [];
// const second = [];

// const first = {};
// const second = {};

// const first = {a: 8};
// const second = {a: 8};

// const first = [12];
// const second = [12];

// aita olo non-primitive tai aita ar referece check kore data nay
// == & === dile o false


//  const first =[] ;
//  const second = first ;
 // aita ole true hoy karon 2 ta variable ak memory k refer kore ader man akta jaygay set kora tai true---judion non-primitive

 const first =[] ;
 const second = first ;
if(first === second){
    console.log('Value are equal')
}
else{
    console.log('Value are not equal')
}




// note 
// always use === equal
// comparison doesn't work for non-primitive type

// check korar jonno google array and object comparison---------