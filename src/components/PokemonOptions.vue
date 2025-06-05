<template>
  <div class="option-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}
.option-container {
  display: flex;
  justify-content: center;
}
li:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>