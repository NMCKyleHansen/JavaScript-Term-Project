/* images */
var images = ['../media/orange.png','../media/cherry.png','../media/banana.png','../media/plum.png'];
/* Sound */
const slotsound = new Audio("./media/slotmachine.mp3");

/* Rules Info Window*/
var modalpopup = document.getElementById('infoModal');
var closeit = document.getElementsByClassName("close")[0];

var gameoverpopup = document.getElementById('gameover');

var d = new Date();
let ms = d.getMilliseconds();

$(document).ready(function() {
  pickimage($("#pos1 .box"));
  pickimage($("#pos2 .box"));
  pickimage($("#pos3 .box"));
});

$('#spinme').click(function() {
  var i = 0;
  slotsound.play();
  pickimage($("#pos1 .box"));
  pickimage($("#pos2 .box"));
  pickimage($("#pos3 .box"));

  while (i<7) {
  setTimeout(function(){
    pickimage($("#pos1 .box"));
    pickimage($("#pos2 .box"));
    pickimage($("#pos3 .box"));
  },1000); 
i++;
}
i=0;  
while (i<7) {
  setTimeout(function(){
    pickimage($("#pos1 .box"));
  },1000); 
  i++;
}
i=0;  
while (i<7) {
  setTimeout(function(){
    pickimage($("#pos2 .box"));
  },1000); 
  setTimeout(function(){
    pickimage($("#pos3 .box"));
  },1000); 
  
  i++;
}
setTimeout(function(){
  slotsound.pause();
},1000); 

//a=document.getElementById("coins").;
var $coins=parseFloat($("#coins").val());
//alert($coins);

var $bet=parseFloat($("#bet").val());
setTimeout(function(){
var $pos1=$("#pos1 .box").html();
var $pos2=$("#pos2 .box").html();
var $pos3=$("#pos3 .box").html();

/* Determine spin results */
if ($pos1.search("plum") > 0) {$pos1="plum";};
if ($pos1.search("orange") > 0) {$pos1="orange";};
if ($pos1.search("banana") > 0) {$pos1="banana";};
if ($pos1.search("cherry") > 0) {$pos1="cherry";};

if ($pos2.search("plum") > 0) {$pos2="plum";};
if ($pos2.search("orange") > 0) {$pos2="orange";};
if ($pos2.search("banana") > 0) {$pos2="banana";};
if ($pos2.search("cherry") > 0) {$pos2="cherry";};

if ($pos3.search("plum") > 0) {$pos3="plum";};
if ($pos3.search("orange") > 0) {$pos3="orange";};
if ($pos3.search("banana") > 0) {$pos3="banana";};
if ($pos3.search("cherry") > 0) {$pos3="cherry";};

/* Cannot bet more than you have. If the user tries then set bet to max coins */
if (parseFloat($bet) > parseFloat($coins)) {$bet = $coins}

var tot = parseFloat($coins) - parseFloat($bet);
var $win = '0';

/****************/
/* Payout rules */
/****************/

/* 3 matches */
if (($pos1 == $pos2) && ($pos2== $pos3)) { $win = $bet * 10;}
/* 2 left and center */
else if ($pos1 == $pos2) {$win = $bet*2;}
/* 2 center and right */
else if ($pos2 == $pos3) {$win = $bet*2;}
/* no matches in a row */
else {$win = '0';}

$("#results").text("You won " +$win + " coins.");
/* reset total */
tot = parseFloat(tot) + parseFloat($win);

$("#coins").val(tot);

/* Look to see if the game is over */

if (parseFloat($("#coins").val()) <= 0)
{
  gameoverpopup.style.display = "block";
} 

},2000); 



}


);

function pickimage(slotpos) {
counter=0; 

/* Randomish Spin based on number of images */
while (counter<777){
    let randomroll = Math.floor(Math.random() * (images.length));
    /* Show the image selected via the randomroll */
    slotpos.html("<div class='slot'><img src='" + images[randomroll] + "'></div>");
    counter++;
}
}

/* Display the rules */
$('#rules').click(function() {
  
  modalpopup.style.display = "block";
}
);

/* Exit the game and goto the main portal */
$('#quit').click(function() {
  
  location.replace("../finalProject.html");
}
);

/* reset the game */
$('#reset').click(function() {
  
  location.replace("slots.html");
}
);

/* Close the rules modal window */
closeit.onclick = function() {
  modalpopup.style.display = "none";
}

/* Game over modal buttons */

$('#exit').click(function() {
  
  location.replace("../finalProject.html");
}
);

$('#restart').click(function() {
  
  location.replace("slots.html");
}
);
