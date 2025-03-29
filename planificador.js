const destinos = [];



const registrarDestino = (destino,fecha, transporte) => {
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };
    destinos.push(nuevoViaje);
}



// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    if (destino === "Paris"){
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}
   
// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    for (let i = 0; i <destinos.length; i++) {
        let viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}


// Iniciar la aplicación
const iniciarApp = () => {
    registrarDestino("New York", "2025-08-15", "Avión");
    registrarDestino("Londres", "2026-03-01", "Avión");

    mostrarItinerario();
}


// Ejecutar la aplicación
iniciarApp();