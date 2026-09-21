/* =========================
   CAMBIO DE PANTALLAS
========================= */

function cambiarPantalla(id) {

    document.querySelectorAll(".pantalla")
        .forEach(pantalla => {

            pantalla.classList.remove("activa");

        });

    document.getElementById(id)
        .classList.add("activa");
}


/* =========================
   PÉTALOS
========================= */

function crearPetalo() {

    const petalo = document.createElement("div");

    petalo.classList.add("petalito");

    petalo.innerHTML = "🌼";

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petalo.style.fontSize =
        (12 + Math.random() * 15) + "px";

    document.getElementById("petals")
        .appendChild(petalo);


    setTimeout(() => {

        petalo.remove();

    }, 10000);

}


/* Crear pétalos periódicamente */

setInterval(crearPetalo, 900);


/* =========================
   BOTÓN INICIAL
========================= */

document
    .getElementById("btnComenzar")
    .addEventListener("click", () => {

        cambiarPantalla("semilla");

        setTimeout(() => {

            const mensaje =
                document.getElementById("textoFlor");

            mensaje.classList.remove("oculto");

            mensaje.classList.add("mostrar");

        }, 3500);


        setTimeout(() => {

            const boton =
                document.getElementById("btnFlor");

            boton.classList.remove("oculto");

            boton.classList.add("mostrar");

        }, 5000);

    });


/* =========================
   CONTINUAR DESDE FLOR
========================= */

document
    .getElementById("btnFlor")
    .addEventListener("click", () => {

        cambiarPantalla("caracteristicas");

    });


/* =========================
   TARJETAS
========================= */

const tarjetas =
    document.querySelectorAll(".tarjeta");

let tarjetasAbiertas = 0;


tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        if (!tarjeta.classList.contains("volteada")) {

            tarjeta.classList.add("volteada");

            tarjetasAbiertas++;

        }


        /* Animación especial para comida */

        if (
            tarjeta.dataset.tipo === "comida"
        ) {

            crearComida();

        }


        /* Cuando abre las 3 */

        if (tarjetasAbiertas === 3) {

            setTimeout(() => {

                const boton =
                    document.getElementById(
                        "btnCaracteristicas"
                    );

                boton.classList.remove("oculto");

                boton.classList.add("mostrar");

            }, 1000);

        }

    });

});


/* =========================
   ANIMACIÓN DE COMIDA
========================= */

function crearComida() {

    const comidas = [
        "🍔",
        "🍕",
        "🍟",
        "🍰",
        "🍩",
        "🍗",
        "🍫"
    ];


    for (let i = 0; i < 12; i++) {

        const comida =
            document.createElement("div");

        comida.classList.add("petalito");

        comida.innerHTML =
            comidas[
                Math.floor(
                    Math.random() *
                    comidas.length
                )
            ];

        comida.style.left =
            Math.random() * 100 + "vw";

        comida.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(comida);


        setTimeout(() => {

            comida.remove();

        }, 6000);

    }

}


/* =========================
   PASAR AL MENSAJE
========================= */

document
    .getElementById("btnCaracteristicas")
    .addEventListener("click", () => {

        cambiarPantalla("mensaje");


        setTimeout(() => {

            escribirMensaje();

        }, 800);

    });


/* =========================
   EFECTO MÁQUINA DE ESCRIBIR
========================= */

function escribirMensaje() {

    const elemento =
        document.getElementById(
            "mensajeEscritura"
        );


    const texto = `
No hice esto porque fuera necesario.

Lo hice porque hay personas que simplemente merecen que uno tenga un detalle con ellas.

Y pensé que tú eras una de esas personas.

Así que...

Feliz día de las Flores Amarillas, Camila. 🌻

Espero que hoy tengas un día tan bonito como tú.
`;


    let posicion = 0;


    function escribir() {

        if (posicion < texto.length) {

            elemento.innerHTML +=
                texto.charAt(posicion);

            posicion++;

            setTimeout(escribir, 35);

        } else {

            setTimeout(() => {

                const boton =
                    document.getElementById(
                        "btnSecreto"
                    );

                boton.classList.remove("oculto");

                boton.classList.add("mostrar");

            }, 1000);

        }

    }


    escribir();

}


/* =========================
   ENTRAR A TERMINAL
========================= */

document
    .getElementById("btnSecreto")
    .addEventListener("click", () => {

        cambiarPantalla("terminal");

        iniciarTerminal();

    });


/* =========================
   TERMINAL
========================= */

function iniciarTerminal() {

    const terminal =
        document.getElementById(
            "terminalTexto"
        );


    terminal.innerHTML = "";


    const lineas = [

        "> Inicializando sorpresa...",

        "> Cargando información...",

        "",

        "> Buscando persona especial...",

        "> ✓ Persona encontrada.",

        "",

        "> Generando flores amarillas...",

        "> ✓ Flores preparadas.",

        "",

        "> Datos encontrados:",

        "",

        "  Nombre: Camila",

        "  Color: Rojo ❤️",

        "  Segundo color: Rosa claro 🌸",

        "  Actividad favorita: Comer 🍔",

        "",

        "> Analizando por qué es especial...",

        "",

        "> ERROR",

        "",

        "No se pudo determinar",

        "por qué Camila es especial.",

        "",

        "> Parece que eso tendrás",

        "  que descubrirlo tú. :)"

    ];


    let lineaActual = 0;


    function escribirLinea() {

        if (lineaActual < lineas.length) {

            terminal.innerHTML +=
                lineas[lineaActual] + "\n";

            lineaActual++;

            setTimeout(
                escribirLinea,
                300
            );

        } else {

            setTimeout(() => {

                const boton =
                    document.getElementById(
                        "btnFinal"
                    );

                boton.classList.remove("oculto");

                boton.classList.add("mostrar");

            }, 1000);

        }

    }


    escribirLinea();

}


/* =========================
   FINAL
========================= */

document
    .getElementById("btnFinal")
    .addEventListener("click", () => {

        cambiarPantalla("final");

        crearExplosionFlores();

    });


/* =========================
   EXPLOSIÓN FINAL
========================= */

function crearExplosionFlores() {

    const flores = [
        "🌻",
        "🌼",
        "🌻",
        "💛"
    ];


    for (let i = 0; i < 35; i++) {

        const flor =
            document.createElement("div");

        flor.classList.add("petalito");

        flor.innerHTML =
            flores[
                Math.floor(
                    Math.random() *
                    flores.length
                )
            ];

        flor.style.left =
            Math.random() * 100 + "vw";

        flor.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        flor.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(flor);

        setTimeout(() => {

            flor.remove();

        }, 10000);

    }

}