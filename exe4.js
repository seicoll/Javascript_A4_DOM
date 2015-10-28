function createChessBoard(a) {
    var color = 'white';
    var table = document.createElement("table");
    for (var i = 0; i < 8; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < 8; j++) {
            var cell = row.insertCell(j);
            //cell.innerHTML = i + "," + j;
            
            if (i % 2 == j % 2) {
                //index de la fila parell i columna parell
                color = "white";
            }
            else {
                //index de la fila imparell o columna imparell
                color = "black";
            }
            
            cell.setAttribute("style", "width:50px;height:50px;background-color:" + color);
        }
    }
    document.body.appendChild(table);
}


createChessBoard();