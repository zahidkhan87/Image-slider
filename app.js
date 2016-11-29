// create array of images

var myImages = [];
myImages[0] = "1.jpg"
myImages[1] = "2.jpg"
myImages[2] = "3.jpg"
myImages[3] = "4.jpg"
myImages[4] = "5.jpg"
myImages[5] = "6.jpg"
myImages[6] = "7.jpg"
myImages[7] = "8.jpg"
myImages[8] = "9.jpg"
myImages[9] = "10.jpg"
myImages[10] = "11.jpg"

// looping in array

for (var i = 0; i < myImages.length; i++) {
    var imgs = new Image();
    imgs.src = "images/" + myImages[i];
}

// function for swaping

var x = 1;

function swapImg() {
    var doc = document.getElementById("swap");
    doc.src = "images/" + myImages[x];
if(x < myImages.length-1) {
    x++;
  }
else {
x = 0;
  }
}