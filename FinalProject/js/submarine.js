/* This code is based on the example called canvas-gamev3.html.
I updated the canvas size, added functions, removed functions, adjusted many calculations, graphics, 
and added a modal window. It is basically a different program now, but that is the core that was used 
to help me understand how a canvas game works.   */
var score=0;
var level=0;
var character;
var myObstacles = [];



/* Setup the canvas items */
function initGame() {
    character = new canvasimage(60, 70, "media/sub.png", 10, 120, "image");
    score = new canvastext("25px", "OCR A Extended", "black", 700, 500, "text");
    level = new canvastext("25px", "OCR A Extended", "black", 480, 500, "text");
    gameCanvas.start();
}

var gameCanvas = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 960;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updategameCanvas, 10);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

/* Used to handle all text on the canvas */
function canvastext(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
    ctx = gameCanvas.context;
            ctx.fillStyle = 'white';
            ctx.fillRect (this.x, this.y, 220, -30);
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y); }
}


/* Used to handle all images on the canvas */
function canvasimage(width, height, color, x, y) {
    this.image = new Image();
    this.image.src = color;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = gameCanvas.context;
        
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y + 15;
        var mybottom = this.y + (this.height) - 19;
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}




function updategameCanvas() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    var modalpopup = document.getElementById('infoModal');
    for (i = 0; i < myObstacles.length; i += 1) {
        if (character.crashWith(myObstacles[i])) {
            gameCanvas.stop();
            /* Handle modal Window buttons */
            modalpopup.style.display = "block";
                document.getElementById("exit").addEventListener("click", function(){
                location.replace("finalProject.html");
                });
                document.getElementById("restart").addEventListener("click", function(){
                location.replace("submarine.html");
                });
            return;
        } 
    }
    gameCanvas.clear();
    gameCanvas.frameNo += 1;
    if (gameCanvas.frameNo == 1 || everyinterval(150)) {
        x = gameCanvas.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 100;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new canvasimage(30, height, "media/columntop.png", x, 0, "image"));
		myObstacles.push(new canvasimage(30, x-height-gap, "media/columnbottom.png", x, height+gap, "image"));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedX = -1;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }
    score.text="SCORE: " + Math.round(gameCanvas.frameNo/100);
    score.update();
    level.text="Skill Level: " + Math.round(gameCanvas.frameNo/500);
    level.update();
    character.newPos();    
    character.update();
}

function everyinterval(n) {
    if ((gameCanvas.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {character.speedY = -1; }
function movedown() {character.speedY = 1; }
/* go backwards at a greater greater speed */
function moveback() {character.speedX = -2; }
function moveforward() {character.speedX = 1; }
function clearmove() {character.speedX = 0; character.speedY = 0; }