<template>
  <h1>Selecciona el Pokemon Correcto</h1>
  <h1 class="mensaje">{{ mensaje }}</h1>
  <PokemonOptions
    @seleccionado="recibioPadre($event)"
    :pokemons="vectorPokemon"
    ref="miHijo2"
  />
  <PokemonImage
    v-if="pokemon"
    :pokemonId="pokemon.id"
    :mostrarImagen="mostrar"
    ref="miHijo1"
  />
  <button @click="comunicarHijo()">Comunicar Hijo</button>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonImage from "@/components/PokemonImage.vue";
import {
  obtenerOptionesFachada,
  obtenerAleatorioFachada,
} from "@/clients/PokemonClient.js";
export default {
  data() {
    return {
      vectorPokemon: [],
      pokemon: null,
      mostrar: false,
      mensaje: null,
    };
  },
  components: {
    PokemonOptions,
    PokemonImage,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOptionesFachada(3);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);

      //elegir un pokemon de los 4
      let pokemonCorrecto = obtenerAleatorioFachada(
        0,
        this.vectorPokemon.length
      );
      this.pokemon = this.vectorPokemon[pokemonCorrecto];
      console.log(this.pokemon.nombre);
    },
    recibioPadre(id) {
      console.log("Mensaje recibido desde hijo");
      console.log(id);
      this.mostrar = true;
      this.validarRespuesta(id.atributo1);
    },
    validarRespuesta(OpcionSeleccionada) {
      if (OpcionSeleccionada === this.pokemon.id) {
        this.mensaje = "Respuesta correcta";
      } else {
        this.mensaje = "Perdiste el correcto es: " + this.pokemon.nombre;
      }
    },
    comunicarHijo() {
      console.log(this.$refs.miHijo1.mensaje1);
      console.log(this.$refs.miHijo2.mensaje2);
      this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1";

      this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2";
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style>
.mensaje {
  color: green;
  text-align: center;
  font-size: 20px;
}
</style>