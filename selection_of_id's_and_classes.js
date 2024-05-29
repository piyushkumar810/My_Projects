console.log("piyush");

// ---------------------------------getting and changing element by class name
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor="red";


// ------------------------------------getting and changing element by id
// let box4=document.getElementById("red")
// box4.style.backgroundColor="red";


// ---------------------------------------query selector
// document.querySelector(".box").style.backgroundColor="green";
// -----------------------ye sara boxes ko green nhi karega jo first mil jayage ussa green karega

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor="green";
})


