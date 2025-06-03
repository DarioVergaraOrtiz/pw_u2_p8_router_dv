<template>
 <div class="option-container">
    <ul>
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
        <li>Pokemon 3</li>
        <li>Pokemon 4</li>
    </ul>
 </div>
</template>

<script>
export default {

}
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
    margin-left: 480px;
}
.opcion-container {
    display: flex;
    justify-content: center;
}
li:hover{
    background: rgba(0, 0, 0, 0.05);
}
</style>