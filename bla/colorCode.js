var num = 6;
var colors = generateRandomColor(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var tryAgain = document.getElementById("tryAgain");
var h1 = document.querySelector(".heading");
var button = document.querySelector("#button");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click", function() {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    num = 3;
    colors = generateRandomColor(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < 3; i++) {
        squares[i].style.background = colors[i];
    }
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.background = "black";
    }

})

hard.addEventListener("click", function() {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    num = 6;
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
})

button.addEventListener("click", function() {
    colors = generateRandomColor(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#343a40";
    tryAgain.textContent = "";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    //adding click event to each square
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if (clickedColor === pickedColor) {
            changeColors(pickedColor);
            tryAgain.textContent = "CORRECT";
            tryAgain.style.color = pickedColor;
            tryAgain.style.fontWeight = "bold";

            h1.style.backgroundColor = pickedColor;
            button.textContent = "PLAY AGAIN?"

        } else {
            tryAgain.style.color = "black";
            tryAgain.textContent = "TRY";
            this.style.background = "black"

        }

    })

}

function changeColors(pickedColor) {
    for (var j = 0; j < num; j++)
        squares[j].style.background = pickedColor;
}

function pickColor() {
    var ran = Math.floor(Math.random() * colors.length);
    return colors[ran];
}


function generateRandomColor(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push(random());
    }
    return array;
}

function random() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}