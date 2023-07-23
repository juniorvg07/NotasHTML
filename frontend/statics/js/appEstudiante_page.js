document.querySelector("#btnConsulta").addEventListener("click", consult_est)

function consult_est() {
    var id = document.getElementById("id_estudiante").value
    
    const obj = {
        "id": id,
    }

    fetch("/consult_est", {
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => notas_est(data))
}

function notas_est(dato)    {
    try{
        let txtWeb = dato[2]
        let txtMovil = dato[3]
        let txtDesktop = dato[4]

        document.getElementById("nombre").innerText = dato[1]

        let tableRef = document.getElementById("tabla")
        let newRow
        var cantFilas = document.getElementById("tabla").rows.length;
    
        if (cantFilas < 2)
            //CABECERAS
            newRow = tableRef.insertRow(0)
            let newCell = newRow.insertCell(0)
            newCell.textContent = "ASIGNATURA"

            newCell = newRow.insertCell(1)
            newCell.textContent = "WEB"

            newCell = newRow.insertCell(2)
            newCell.textContent = "MOVIL"

            newCell = newRow.insertCell(3)
            newCell.textContent = "DESKTOP"

            //NOTAS
            newRow = tableRef.insertRow(1)
            newCell = newRow.insertCell(0)
            newCell.textContent = "NOTAS"

            newCell = newRow.insertCell(1)
            newCell.textContent = txtWeb

            newCell = newRow.insertCell(2)
            newCell.textContent = txtMovil

            newCell = newRow.insertCell(3)
            newCell.textContent = txtDesktop
    }
    catch{
        //alert("EL ID NO SE ENCUENTRA REGISTRADO")
    }
    

}