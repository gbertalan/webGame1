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
        cell.id = i;
        cell.style = "width:2vh; height:2vh; border:1px solid white; background-color: rgb(240, 240, 240);";
        cell.onmouseenter = function cellHover() {
            cell.style = "width:2vh; height:2vh; border:1px solid white; background-color: blue;";
            console.log("entered");
        }
        cell.onmouseleave = function cellHover() {
            cell.style = "width:2vh; height:2vh; border:1px solid white; background-color: rgb(240, 240, 240);";
            console.log("entered");
        }
        row.appendChild(cell);
    }
    playingFieldTable.appendChild(row);
}



let main = document.getElementsByTagName("main");
main.style = "max-width: 100vw";

