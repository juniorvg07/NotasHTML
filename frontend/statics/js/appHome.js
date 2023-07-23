document.querySelector("#btnDocente").addEventListener("click", profesor_page)
document.querySelector("#btnEstudiante").addEventListener("click", estudiante_page)

function profesor_page() {
    location.href = "/profesor_page"
}

function estudiante_page() {
    location.href = "/estudiante_page"
}