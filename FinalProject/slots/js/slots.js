/* images */
var images = ['../media/orange.png','../media/cherry.png','../media/banana.png','../media/plum.png'];
var d = new Date();
let ms = d.getMilliseconds();

$(document).ready(function() {
  pickimage($("#pos1 .box"));
  pickimage($("#pos2 .box"));
  pickimage($("#pos3 .box"));
});

$('#spinme').click(function() {
console.log("spin!");
  pickimage($("#pos1 .box"));
  pickimage($("#pos2 .box"));
  pickimage($("#pos3 .box"));
});

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