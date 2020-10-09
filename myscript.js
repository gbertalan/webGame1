let playingField = document.getElementById("playing-field");
let image = document.getElementById("playing-field-image");
playingField.removeChild(image);


for (let i = 0; i < 140; ++i) {
let div = document.createElement("div");
div.style = "width:2vh; height:2vh; border:1px solid black";
playingField.appendChild(div);
}

let div2 = document.createElement("div");
div2.style = "width:2vh; height:2vh; border:1px solid black";
playingField.appendChild(div2);
