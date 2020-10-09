let playingFieldTable = document.getElementById("playing-field-table");

/*
for (let i = 0; i < 1600; ++i) {
let div = document.createElement("div");
div.style = "width:2%; height:2%; border:1px solid black";
playingField.appendChild(div);
}
*/
for (let i = 0; i < 20; ++i) {
let row = document.createElement("tr");
row.style = " min-width: 0px; min-height: 0px;";
for (let i = 0; i < 20; ++i) {
let cell = document.createElement("td");
let div = document.createElement("div");
cell.style = "background-color: green; min-width: 0px; min-height: 0px;";
div.style = "width:2vh; height:2vh; border:1px solid red; background-color: black; min-width: 0px; min-height: 0px;";
cell.appendChild(div);
row.appendChild(cell);
}
playingFieldTable.appendChild(row);
}

