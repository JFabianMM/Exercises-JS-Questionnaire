// **************************** //
// Exercise 30
// **************************** //
// - The second <p> of each pair should be hidden when the browser loads
// - When the first <p> of each pair  is clicked, it will toggle show/hide the second <p>
// - May be created using vanilla javascript or jQuery

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
        let attributeValue = element.getAttribute('style','visibility');
        if (attributeValue=='visibility: visible;'){
            element.style.visibility = "hidden";
        }
        if (attributeValue=='visibility: hidden;'){
            element.style.visibility = "visible";
        }
})}
