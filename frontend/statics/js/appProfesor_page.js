document.querySelector("#btnIngreso").addEventListener("click", consult_prof)

function consult_prof() {
    var id = document.getElementById("id_docente").value
    var pass = document.getElementById("pass_docente").value

    const obj = {
        "id": id,
    }

    fetch("/consult_prof", {
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => asignatura_prof(data, pass))
}

function asignatura_prof(dato,passw)    {
    try{
        let nombre = dato[1]
        let passData = dato[2]
        let asignatura = dato[3]
        
        let tableRef = document.getElementById("table")
        let newRow
        var cantFilas = document.getElementById("table").rows.length;

        if (cantFilas == 0)
            if(passw == passData){
                alert("Bienvenido Prof. " + nombre)
                document.getElementById("nombre").innerText = nombre
                document.getElementById("materia").innerText = asignatura
            
                newRow = tableRef.insertRow(-1)
                let newCell = newRow.insertCell(0)
                newCell.textContent = "NOMBRE"

                newCell = newRow.insertCell(1)
                newCell.textContent = "NOTA"

                newCell = newRow.insertCell(2)
                newCell.textContent = "ACCIÓN"

                callEst(asignatura, tableRef, newRow, newCell)
            }
            else
                alert("ID y/o Contraseña inválidos")
    }
    catch{
        //alert("EL ID NO SE ENCUENTRA REGISTRADO")
    }
}

function callEst(materia, tabla, fila, celda){
    const obj = {
        "tabla": "estudiante",
    }
    fetch("/total_est", {
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => {
        let asig = 0

        switch (materia) {
            case "WEB":
              asig = 2;
              break;
            case "MOVIL":
              asig = 3;
              break;
            case "DESKTOP":
              asig = 4;
              break;
            default:
              //
        }

        for(var i = 0; i < 3; i++){
            let est = data[i]
            fila = tabla.insertRow(-1)
            celda = fila.insertCell(0)
            celda.textContent = est[1]

            celda = fila.insertCell(1)
            celda.textContent = est[asig]

            var btn = document.createElement("button");
            btn.textContent = "Editar";
            btn.id = "btnEditar";
            celda = fila.insertCell(2).append(btn)
        }
    })
}

