// **************************** //
// Exercise 31
// **************************** //

// Modify the previous exercise so that only the 
// clicked <p> is shown. All others should be hidden. (1 hours)    

let parentElement=document.querySelector('body');

let even = document.querySelectorAll("p:nth-child(even)");
let odd = document.querySelectorAll("p:nth-child(odd)");
for (let i of even) {
    i.style.visibility = "hidden";
}
for (let i of odd) {
    i.addEventListener("click", function(){
        let index = Array.from(parentElement.children).indexOf(this);
        let element=parentElement.children[index+1];
        for (let i of even) {
            i.style.visibility = "hidden";
        }
        element.style.visibility = "visible";
})}
