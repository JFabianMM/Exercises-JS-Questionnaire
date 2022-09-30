// **************************** //
// Exercise 30
// **************************** //
// - The second <p> of each pair should be hidden when the browser loads
// - When the first <p> of each pair  is clicked, it will toggle show/hide the second <p>
// - May be created using vanilla javascript or jQuery

let divElement = document.querySelector('div');
let odd = document.querySelectorAll('p');
for (let i of odd) {
    i.style.visibility = "visible";
}
divElement.addEventListener("click", function(){
    let targetElement=event.target;
    let childIndex = Array.from(targetElement.parentElement.children).indexOf(targetElement);
    if(childIndex % 2 == 0) {    // chack if is even position
        let nextElement=targetElement.parentElement.children[childIndex+1];
        let attributeValue = nextElement.getAttribute('style','visibility');   // Get the current attribute value
        if (attributeValue=='visibility: visible;') nextElement.style.visibility = "hidden";
        if (attributeValue=='visibility: hidden;') nextElement.style.visibility = "visible";
    }
})
