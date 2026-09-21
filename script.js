/* =====================================
   CAMBIO DE PANTALLA
===================================== */

function cambiarPantalla(id) {

    document
        .querySelectorAll(".pantalla")
        .forEach(pantalla => {

            pantalla.classList.remove("activa");

        });


    document
        .getElementById(id)
        .classList.add("activa");

}



/* =====================================
   PÉTALOS
===================================== */

function crearPetalo() {

    const petalo =
        document.createElement("div");


    petalo.className =
        "petalito";


    petalo.textContent =
        "🌼";


    petalo.style.left =
        Math.random() * 100 + "vw";


    petalo.style.fontSize =
        12 + Math.random() * 15 + "px";


    petalo.style.animationDuration =
        5 + Math.random() * 5 + "s";


    document
        .getElementById("petals")
        .appendChild(petalo);


    setTimeout(() => {

        petalo.remove();

    }, 10000);

}


setInterval(
    crearPetalo,
    1200
);



/* =====================================
   INICIO
===================================== */

document
    .getElementById("btnComenzar")
    .addEventListener(
        "click",
        () => {

            cambiarPantalla(
                "semilla"
            );


            setTimeout(() => {

                document
                    .getElementById(
                        "textoFlor"
                    )
                    .classList
                    .add("mostrar");

            }, 3500);


            setTimeout(() => {

                document
                    .getElementById(
                        "btnFlor"
                    )
                    .classList
                    .add("mostrar");

            }, 4800);

        }
    );



/* =====================================
   FLOR
===================================== */

document
    .getElementById("btnFlor")
    .addEventListener(
        "click",
        () => {

            cambiarPantalla(
                "caracteristicas"
            );

        }
    );



/* =====================================
   TARJETAS
===================================== */

const tarjetas =
    document.querySelectorAll(
        ".tarjeta"
    );


let tarjetasAbiertas = 0;


tarjetas.forEach(
    tarjeta => {

        tarjeta.addEventListener(
            "click",
            () => {

                if (
                    !tarjeta
                        .classList
                        .contains(
                            "volteada"
                        )
                ) {

                    tarjeta
                        .classList
                        .add(
                            "volteada"
                        );

                    tarjetasAbiertas++;

                }


                if (
                    tarjeta.dataset.tipo
                    === "comida"
                ) {

                    lluviaComida();

                }


                if (
                    tarjetasAbiertas === 3
                ) {

                    setTimeout(() => {

                        document
                            .getElementById(
                                "btnCaracteristicas"
                            )
                            .classList
                            .add(
                                "mostrar"
                            );

                    }, 700);

                }

            }
        );

    }
);



/* =====================================
   LLUVIA DE COMIDA
===================================== */

function lluviaComida() {

    const comidas = [
        "🍔",
        "🍕",
        "🍟",
        "🍰",
        "🍩",
        "🍗",
        "🍫"
    ];


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const comida =
            document.createElement(
                "div"
            );


        comida.className =
            "petalito";


        comida.textContent =
            comidas[
                Math.floor(
                    Math.random()
                    * comidas.length
                )
            ];


        comida.style.left =
            Math.random()
            * 100 + "vw";


        comida.style.animationDuration =
            3 + Math.random() * 3
            + "s";


        document.body
            .appendChild(comida);


        setTimeout(() => {

            comida.remove();

        }, 6000);

    }

}



/* =====================================
   IR AL JUEGO
===================================== */

document
    .getElementById(
        "btnCaracteristicas"
    )
    .addEventListener(
        "click",
        () => {

            cambiarPantalla(
                "juego"
            );

        }
    );



/* =====================================
   JUEGO DE COMIDA
===================================== */

const opcionesComida =
    document.querySelectorAll(
        ".opcion-comida"
    );


let comidaElegida = "";


opcionesComida.forEach(
    opcion => {

        opcion.addEventListener(
            "click",
            () => {

                opcionesComida
                    .forEach(
                        item => {

                            item.classList
                                .remove(
                                    "seleccionada"
                                );

                        }
                    );


                opcion.classList
                    .add(
                        "seleccionada"
                    );


                comidaElegida =
                    opcion.dataset.comida;


                mostrarRespuestaComida(
                    comidaElegida
                );


                document
                    .getElementById(
                        "btnDespuesComida"
                    )
                    .classList
                    .add(
                        "mostrar"
                    );

            }
        );

    }
);



function mostrarRespuestaComida(
    comida
) {

    const respuesta =
        document.getElementById(
            "respuestaComida"
        );


    const respuestas = {

        pizza:
            "Sabía que había algo importante que descubrir aquí. 🍕",

        bandera:
            "Una elección bastante seria. 😂🍗",

        sushi:
            "Ok... veo que tenemos gustos interesantes. 🍣",

        postre:
            "No necesitaba más pruebas. El postre siempre tiene un lugar especial. 🍰"

    };


    respuesta.textContent =
        respuestas[comida];

}



/* =====================================
   DESPUÉS DE COMIDA
===================================== */

document
    .getElementById(
        "btnDespuesComida"
    )
    .addEventListener(
        "click",
        () => {

            cambiarPantalla(
                "eleccionFlor"
            );

        }
    );



/* =====================================
   ELECCIÓN DE FLOR
===================================== */

const flores =
    document.querySelectorAll(
        ".flor-opcion"
    );


let florElegida = "";


flores.forEach(
    flor => {

        flor.addEventListener(
            "click",
            () => {

                flores.forEach(
                    item => {

                        item.classList
                            .remove(
                                "seleccionada"
                            );

                    }
                );


                flor.classList
                    .add(
                        "seleccionada"
                    );


                florElegida =
                    flor.dataset.flor;


                mostrarRespuestaFlor(
                    florElegida
                );


                document
                    .getElementById(
                        "btnDespuesFlor"
                    )
                    .classList
                    .add(
                        "mostrar"
                    );

            }
        );

    }
);



function mostrarRespuestaFlor(
    flor
) {

    const respuesta =
        document.getElementById(
            "respuestaFlor"
        );


    const respuestas = {

        amarilla:
            "Elegiste la protagonista de todo esto. 🌻",

        blanca:
            "Elegante elección. Aunque hoy la protagonista sigue siendo amarilla. 🤍",

        rosa:
            "Sabía que el rosa iba a aparecer en algún momento. 🌷"

    };


    respuesta.textContent =
        respuestas[flor];

}



/* =====================================
   IR AL MENSAJE
===================================== */

document
    .getElementById(
        "btnDespuesFlor"
    )
    .addEventListener(
        "click",
        () => {

            cambiarPantalla(
                "mensaje"
            );


            setTimeout(
                escribirMensaje,
                700
            );

        }
    );



/* =====================================
   MENSAJE PERSONAL
===================================== */

function escribirMensaje() {

    const elemento =
        document.getElementById("mensajeEscritura");

    const mensajeSeccion =
        document.getElementById("mensaje");

    const btnSecreto =
        document.getElementById("btnSecreto");

    const texto = `Camila...

No quería simplemente darte una flor amarilla.

Quería hacer algo diferente.

Algo que tuviera un poquito de mí
y que, al mismo tiempo,
tuviera cosas que me recuerdan a ti.

Así que hice esto.

No porque fuera necesario.

Sino porque hay personas
que hacen que uno quiera tener
detalles bonitos con ellas.

Y tú eres una de esas personas.

Espero que sonrías un poquito
cuando llegues hasta aquí.

Feliz día de las Flores Amarillas. 🌻`;

    elemento.textContent = "";

    let posicion = 0;

    function escribir() {

        if (posicion < texto.length) {

            elemento.textContent +=
                texto.charAt(posicion);

            posicion++;

            setTimeout(escribir, 30);

        } else {

            // El botón aparece después de terminar el mensaje
            setTimeout(() => {

                btnSecreto.classList.add("mostrar");

            }, 800);
        }
    }

    escribir();
}


/* =====================================
   EASTER EGG
===================================== */

document
    .getElementById(
        "btnSecreto"
    )
    .addEventListener(
        "click",
        () => {

            cambiarPantalla(
                "terminal"
            );


            iniciarTerminal();

        }
    );



/* =====================================
   TERMINAL
===================================== */

function iniciarTerminal() {

    const terminal =
        document.getElementById(
            "terminalTexto"
        );


    terminal.textContent = "";


    const lineas = [

        "> iniciando proyecto...",


        "> cargando camila.js...",


        "",


        "> leyendo información...",


        "",


        "Nombre: Camila",


        "Color principal: Rojo ❤️",


        "Color secundario: Rosa claro 🌸",


        "Actividad favorita: Comer 🍔",


        "",


        "> ejecutando análisis...",


        "",


        "> Buscando razón del detalle...",


        "",


        "ERROR 404:",


        "Razón no encontrada.",


        "",


        "> intentando nuevamente...",


        "",


        "ERROR:",


        "Demasiadas razones.",


        "",


        "> conclusión:",


        "Era imposible no hacerle algo.",


        "",


        "> compilación completada ✓"

    ];


    let linea =
        0;


    function escribirLinea() {

        if (
            linea <
            lineas.length
        ) {

            terminal.textContent +=
                lineas[linea]
                + "\n";


            linea++;


            setTimeout(
                escribirLinea,
                250
            );

        } else {

            setTimeout(() => {

                document
                    .getElementById(
                        "btnFinal"
                    )
                    .classList
                    .add(
                        "mostrar"
                    );

            }, 1000);

        }

    }


    escribirLinea();

}



/* =====================================
   FINAL
===================================== */

document
    .getElementById(
        "btnFinal"
    )
    .addEventListener(
        "click",
        () => {

            cambiarPantalla(
                "final"
            );


            explosionFlores();


            personalizarFinal();

        }
    );



/* =====================================
   FINAL DINÁMICO
===================================== */

function personalizarFinal() {

    const mensaje =
        document.getElementById(
            "mensajeFinal"
        );


    if (
        comidaElegida ===
        "postre"
    ) {

        mensaje.textContent =
            "Y espero que después de todo esto, también encuentres algo rico para comer. 🍰💛";

    }

    else if (
        comidaElegida ===
        "hamburguesa"
    ) {

        mensaje.textContent =
            "Ahora solo falta cumplir una de las cosas importantes: conseguir algo rico para comer. 🍔💛";

    }

    else {

        mensaje.textContent =
            "Espero que hoy recibas aunque sea una pequeña parte de todo lo bonito que mereces. 💛";

    }

}



/* =====================================
   EXPLOSIÓN DE FLORES
===================================== */

function explosionFlores() {

    const elementos = [
        "🌻",
        "🌼",
        "🌻",
        "💛",
        "✨"
    ];


    for (
        let i = 0;
        i < 40;
        i++
    ) {

        const elemento =
            document.createElement(
                "div"
            );


        elemento.className =
            "petalito";


        elemento.textContent =
            elementos[
                Math.floor(
                    Math.random()
                    * elementos.length
                )
            ];


        elemento.style.left =
            Math.random()
            * 100 + "vw";


        elemento.style.fontSize =
            15 +
            Math.random() * 20
            + "px";


        elemento.style.animationDuration =
            4 +
            Math.random() * 5
            + "s";


        document.body
            .appendChild(
                elemento
            );


        setTimeout(() => {

            elemento.remove();

        }, 10000);

    }

}