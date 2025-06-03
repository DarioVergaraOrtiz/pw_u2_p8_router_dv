<template>
  <h1>Selecciona el Pokemon Correcto</h1>
  <PokemonOptions />
  <PokemonImage :pokemonId="10" :mostrarImagen="true"/>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonImage from "@/components/PokemonImage.vue";
export default {
  components: {
    PokemonOptions,
    PokemonImage,
  },
};
</script>

<style>
</style>