// **************************** //
// Exercise 29
// **************************** //

// Given the following markup, and using only CSS and vanilla javascript: (1 hours)

// <div>Some text goes here</div>
// <a id='id1'>Show</a>

// Make the div be hidden at the beginning
// When the link is clicked, display the div and its content. 

let div = document.querySelector('div');
div.style.visibility = "hidden";
let a = document.querySelector('a');
a.addEventListener("click", showInfo);

function showInfo() {  
    div.style.visibility = "visible";
}

