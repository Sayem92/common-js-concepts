/* 
truthy :-------------
1. true
2. any number of ( +number, -number) will be truthy other than 0
3. any string and other than empty string (' ') truthy
4. '0'  , 'false'  
5. {}  and {name:'akas', id:12}
6. []   and [12, 696, 652]


falsy :------------------
1. false
2. 0
3. ('') (empty string ) will be false
4. undefined
5. null

*/


// const x = {}
// if(x){
//     console.log('Value of x is truthy')
// }
// else{
//     console.log('Value of x is falsy')
// }





// optional 
// check falsy
const y = '';
if(!y){
    // console.log('Value of x is falsy')
}

// check truthy
const a = []
 if(!!a){
    console.log('Value of x is truthy......')
}

//  ! akta dile true k negative kore 
//  !! 2 ta dile potom negative kore pore abar positive kore
