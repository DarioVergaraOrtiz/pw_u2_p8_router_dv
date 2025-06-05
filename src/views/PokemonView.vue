<template>
  <h1>Selecciona el Pokemon Correcto</h1>
  <PokemonOptions :pokemons="vectorPokemon" />
  <PokemonImage :pokemonId="90" :mostrarImagen="true" />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonImage from "@/components/PokemonImage.vue";
import { obtenerOptionesFachada } from "@/clients/PokemonClient.js";
export default {
  data() {
    return {
      vectorPokemon: [],
    };
  },
  components: {
    PokemonOptions,
    PokemonImage,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOptionesFachada(4);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style>
</style>