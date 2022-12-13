// **************************** //
// Exercise 22
// **************************** //

// Create a page with a button on it. Every time the 
// button is pressed, the color of a <div> element will change. (30 mins).

let div = document.getElementById('div');
let count=0;
let arr=['salmon', 'white', 'yellow', 'pink', 'green', 'orange'];
btn.addEventListener('click', function onClick() {
    div.style.backgroundColor = arr[count++];
    if (count==6) count=0;
});