//funcion que aplica el tema oscuro o blanco y ademas guarda el tema en una constante
function aplicarTema() {
    const tema = localStorage.getItem("tema");
    const boton = document.getElementById("theme-toggle");

    if (tema === "oscuro") {
        document.body.classList.add("dark-mode");

        if (boton) {
            boton.textContent = "Tema Claro";
        }
    } else {
        document.body.classList.remove("dark-mode");

        if (boton) {
            boton.textContent = "Tema Oscuro";
        }
    }
}

//funcion con localStorage que utiliza el tema guardado para mantenerlo entre los html
function cambiarTema() {
    const boton = document.getElementById("theme-toggle");

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "oscuro");
        boton.textContent = "Tema Claro";
    } else {
        localStorage.setItem("tema", "claro");
        boton.textContent = "Tema Oscuro";
    }
}

document.addEventListener("DOMContentLoaded", aplicarTema);


//funcion de fecha y hora actual visualizada en cada html en el footer
function actualizarFechaHora() {
    const fecha = new Date();

    document.getElementById("fecha-hora").textContent = fecha.toLocaleString("es-AR");
}

setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();