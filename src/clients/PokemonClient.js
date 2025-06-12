import axios from "axios";

const consumirPokemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rpt => rpt.data);
    console.log();
    return respuesta;

}

const obtenerObjetoPokemon = async (nombre) => {
    const data = await consumirPokemon(nombre);
    console.log(data.name);
    const pokemon = {
        nombre: data.name,
        id: data.id
    }

    return pokemon;
}

const obtenerArregloNumerico = (longitud) => {
    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerArregloPokemon = async (arregloNumerico) => {
    const vector = [];
    for (let numero of arregloNumerico) {
        let objetoPokemon = await obtenerObjetoPokemon(numero);
        vector.push(objetoPokemon);
    }
    return vector;
}

const obtenerOptiones = async (longitud) => {
    const vector = obtenerArregloNumerico(longitud);
    const vectorObjetos = await obtenerArregloPokemon(vector);
    return vectorObjetos;
}

//funciones fachada
export const consumirPokemonFachada = async (id) => {
    return await consultarRespuesta(id);
}


export const obtenerOptionesFachada = async (longitud) => {
    return await obtenerOptiones(longitud);
}

export function obtenerAleatorioFachada(min, max){
    return obtenerAleatorio(min,max);
}
