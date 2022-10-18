// const lists =    document.querySelectorAll(".list-container p")


// for (var x=0; x < lists.length; x++){
//     if (x < 5 ) {
    
//         lists[x].style.color="red"
    
//     }
//     else {
//         lists[x].style.color="blue"
        
//     }
// }


// const lists =    document.querySelectorAll(".list-container p")

// for (let x = 0; x < lists.length; x++) {

//     lists[x].addEventListener("click", () => {
//         console.log(lists[x])
//         let permission = confirm("Yes");
//         if (permission == true) { lists[x].style.display = "none"}
//     })
// }





// for (var i = 0; i < 5; i++){


//     let x = i;

//     setTimeout(() => {
        
//         console.log(x)


//     }, 2000);
// }








// let storeColor_and_number = ["green", "red", "blue", 10, 20]
// let storeNumber = [];
// let storeString = ["Orange"];




// const store = () => {

//     storeColor_and_number.filter(data => {
//         typeof (data) == 'string' ? storeString.push(data) : storeNumber.push(data)
//     })


//     console.log(storeNumber.reduce((x, y) => x + y))

// }


// store();


// console.log(storeNumber)
// console.log(storeString)





const givenLetter = "He,is a+very very good=boy. Isn't he?"


let OutPut = givenLetter.split(/,| |'|=/)

console.log(OutPut);










