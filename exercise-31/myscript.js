// **************************** //
// Exercise 31
// **************************** //

// Modify the previous exercise so that only the 
// clicked <p> is shown. All others should be hidden. (1 hours)    

let divElement = document.querySelector('div');
let even = document.querySelectorAll("p:nth-child(even)");
for (let i of even) {
    i.style.visibility = "hidden";
}
divElement.addEventListener("click", function(){
     let targetElement=event.target;
     let childIndex = Array.from(targetElement.parentElement.children).indexOf(targetElement);
     if(childIndex % 2 == 0) {    // chack if is even position
        let nextElement=targetElement.parentElement.children[childIndex+1];
        let attributeValue = nextElement.getAttribute('style','visibility');   // Get the current attribute value
        for (let i of even) {
             i.style.visibility = "hidden";
        }
        if (attributeValue=='visibility: visible;') nextElement.style.visibility = "hidden";
        if (attributeValue=='visibility: hidden;') nextElement.style.visibility = "visible";
     }
})