function greeting (newfunction,name){
    newfunction(name)
}
// const number = 45
// const name = 'salam'
// const labtop = {name:'salam', id: 12}
// const array = [12,52,852.,852.2 ,85,]

function getHandler(name){
    console.log('Good Morning',name)
}


function greetEvening(name){
    console.log('Good evening', name)
}

function greetNight (name){
    console.log('Good Night', name)
}

greeting (getHandler,'sayem')
greeting (getHandler,'mona')
// greeting (getHandler,'yasin')
// greeting (getHandler,'asik')

greeting(greetEvening, 'akkas ali ')
greeting(greetEvening, 'mofiz ulla ')
// greeting(greetEvening, 'keramot ')

greeting(greetNight, 'sofor ')
greeting(greetNight, 'kobor ')
// greeting(greetNight, 'takur ')



// aita olo callback function --------------------------
function sumitHandler(){
    console.log('paici ok')
}
document.getElementById('btn-submit').addEventListener('click', sumitHandler)

