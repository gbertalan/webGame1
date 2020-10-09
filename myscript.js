let playingField = document.getElementById("playing-field");
let image = document.getElementById("playing-field-image");
playingField.removeChild(image);

let div = document.createElement("div");
div.style = "width:2vh; height:2vh; border:1px solid black";
playingField.appendChild(div);
