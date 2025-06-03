import axios from "axios";

const consultarRespuesta = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rpt => rpt.data);
    console.log();
    return respuesta;

}

//funciones fachada
export const consultarRespuestaFachada = async (id) => {
    return await consultarRespuesta(id);
}