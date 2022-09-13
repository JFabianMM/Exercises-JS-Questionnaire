
const elem = document.getElementById("animate");
elem.style.left = 0 + "px";
elem.style.marginTop = 0 + "px";
let heigh=10;
function start() {
    let he=heigh*2;
    counter=0;
    let id = null;   
    let pos = 0;
    elem.style.left = 0 + "px";
    elem.style.marginTop= pos+"px";
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (he==0){
        clearInterval(id);
      }
      if (he%2==0){
        if (pos == heigh*35) {
           he=he-1;
           counter++;
        } else {
            pos++;  
            elem.style.marginTop = pos + "px";
          }   
        }  
      if (he%2==1){
        if (pos == counter*35) {
          he=he-1;
       } else {
           pos--;  
           elem.style.marginTop = pos + "px";
         }   
       }
      }
    }

  // Each inch is equal 35px, so 10 in = 350px
  // As you see, the logic no represent a realistic movement, due  
  // is not asked. If its required a realistic movement, I can add it.  