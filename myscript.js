let playingFieldTable = document.getElementById("playing-field-table");

/*
for (let i = 0; i < 1600; ++i) {
let div = document.createElement("div");
div.style = "width:2%; height:2%; border:1px solid black";
playingField.appendChild(div);
}
*/
for (let i = 0; i < 30; ++i) {
    let row = document.createElement("tr");
    row.style = "max-width: 100vw;";
    for (let i = 0; i < 30; ++i) {
        let cell = document.createElement("td");

        cell.style = "background-color: green; width:2vh; height:2vh; border:1px solid red; background-color: black;";
        
        row.appendChild(cell);
    }
    playingFieldTable.appendChild(row);
}

let main = document.getElementsByTagName("main");
main.style = "max-width: 100vw";

