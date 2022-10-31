
// 34. Write the logic required to represent a bouncing ball. 
// The requirements are: (2 hours) 
// ○ Initial height of the ball should be 10 in.
// ○ On first hitting the floor, it should bounce back 9 in.
// ○ On the second bounce, it should go up 8 in. and so on.



// To implement the gravity effect I took as a base the code of 
//  Game Bouncing from https://www.w3schools.com/graphics/game_bouncing.asp
//  Of course I modified many parts of the code. 


let myGamePiece;
function startGame() {
    myGamePiece = new component(37.7, 37.7, 50, 40);
    myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 100;
        this.canvas.height = 620;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
                
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
let counter=0
function component(width, height, x, y) {
    this.factor=[0.955, 0.945, 0.94, 0.935, 0.915, 0.91, 0.87, 0.8, 0.7, 0.001];
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.3;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, this.height, 2 * Math.PI);
        ctx.stroke();
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        let rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            counter++;
            if (counter<10){
              this.bounce=this.factor[counter-1];
            }else{
              this.bounce=0;
            }
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
}

function updateGameArea() {
  if (counter<10){
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
  }
}
