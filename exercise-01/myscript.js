// **************************** //
// Exercise 1
// **************************** //

// Create an animation using JavaScript
// Create a moveLeft animation

const elem = document.getElementById("animate");
elem.style.left = 350 + "px";
function myMove() {
    let id = null;   
    let pos = 350;
    elem.style.left = pos + "px";
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--;  
        elem.style.left = pos + "px"; 
      }
    }
  }