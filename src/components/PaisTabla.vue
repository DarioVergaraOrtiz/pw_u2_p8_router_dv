<template>
  <div class="container">
    <!-- Mensaje de éxito -->
    <div v-show="mostrar" class="alert">
      <h2> {{mensajeFinal}} </h2>
    </div>

    <!-- Formulario de países -->
    <div class="formulario">
      <label for="nombre">Nombre del país:</label>
      <input v-model="nuevoPais.nombre" id="nombre" type="text" />
      <span v-if="mensaje.nombre"> {{ mensaje.nombre }} </span>

      <label for="capital">Capital:</label>
      <input v-model="nuevoPais.capital" id="capital" type="text" />
      <span v-if="mensaje.capital"> {{ mensaje.capital }} </span>

      <label for="region">Región:</label>
      <input v-model="nuevoPais.region" id="region" type="text" />
      <span v-if="mensaje.region"> {{ mensaje.region }} </span>

      <label for="poblacion">Población:</label>
      <input
        v-model.number="nuevoPais.poblacion"
        id="poblacion"
        type="number"
      />
      <span v-if="mensaje.poblacion"> {{ mensaje.poblacion }} </span>

      <label for="moneda">Moneda:</label>
      <input v-model="nuevoPais.moneda" id="moneda" type="text" />
      <span v-if="mensaje.moneda"> {{ mensaje.moneda }} </span>

      <button @click="agregarPais">Guardar país</button>
    </div>

    <!-- Tabla de países -->
    <table class="tabla-paises">
      <thead>
        <tr>
          <th>País</th>
          <th>Capital</th>
          <th>Región</th>
          <th>Población</th>
          <th>Moneda</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pais in lista" :key="pais.nombre">
          <td>{{ pais.nombre }}</td>
          <td>{{ pais.capital }}</td>
          <td>{{ pais.region }}</td>
          <td>{{ pais.poblacion }}</td>
          <td>{{ pais.moneda }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoPais: {
        nombre: null,
        capital: null,
        region: null,
        poblacion: null,
        moneda: null,
      },
      lista: [
        {
          nombre: "Ecuador",
          capital: "Quito",
          region: "América del Sur",
          poblacion: 17643060,
          moneda: "Dólar USD",
        },
        {
          nombre: "España",
          capital: "Madrid",
          region: "Europa",
          poblacion: 47351567,
          moneda: "Euro",
        },
        {
          nombre: "Japón",
          capital: "Tokio",
          region: "Asia",
          poblacion: 125960000,
          moneda: "Yen",
        },
      ],
      mostrarMensaje: false,
      nombreMensaje: false,
      capitalMensaje: false,
      regionMensaje: false,
      poblacionMensaje: false,
      monedaMensaje: false,

      mensaje: {
        nombre: null,
        capital: null,
        region: null,
        poblacion: null,
        moneda: null,
      },
      mensajeFinal: null,
    };
  },
  methods: {
    agregarPais() {
      if (this.validarEntradas()) {
        // Inserta al inicio de la lista
        this.lista.unshift({ ...this.nuevoPais });
        // Limpia el formulario
        this.nuevoPais = {
          nombre: "",
          capital: "",
          region: "",
          poblacion: null,
          moneda: "",
        };
        // Muestra mensaje por 3 segundos
        this.mostrarMensaje = true;
        setTimeout(() => {
          this.mostrarMensaje = false;
        }, 3000);
        this.mensajeFinal="Estudiante guardado";
        this.limpiarPagina();
      }
    },
    validarEntradas() {
      try {
        //let validar = this.mensaje.capital.primero;
        let numero = 0;
        if (this.nuevoPais.nombre === null) {
          this.mensaje.nombre = "Nombre es Obligatorio";
        } else {
          numero++;
        }
        if (this.nuevoPais.capital === null) {
          this.mensaje.capital = "Capital es Obligatorio";
        } else {
          numero++;
        }
        if (this.nuevoPais.region === null) {
          this.mensaje.region = "Region es Obligatorio";
        } else {
          numero++;
        }
        if (this.nuevoPais.poblacion === null) {
          this.mensaje.poblacion = "Población es Obligatorio";
        } else {
          numero++;
        }
        if (this.nuevoPais.moneda === null) {
          this.mensaje.moneda = "Moneda es Obligatorio";
        } else {
          numero++;
        }

        if (numero === 5) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Error ha ocurrido un problema");
        console.error(error);
        this.mostrar = true;
        this.mensajeFinal="Ha ocurrido un error en el sistema";
      }
    },
    limpiarPagina() {
      this.nuevoPais.nombre = null;
      this.nuevoPais.capital = null;
      this.nuevoPais.region = null;
      this.nuevoPais.poblacion = null;
      this.nuevoPais.moneda = null;

      this.mensaje.nombre = null;
      this.mensaje.capital = null;
      this.mensaje.region = null;
      this.mensaje.poblacion = null;
      this.mensaje.moneda = null;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

/* Mensaje de éxito */
.alert {
  background-color: #e0f7e9;
  border: 1px solid #48c78e;
  color: #276749;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
}

/* Formulario */
.formulario {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 30px;
  margin-bottom: 30px;
}

.formulario label {
  align-self: center;
  font-weight: bold;
}

.formulario input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.formulario button {
  grid-column: span 2;
  padding: 12px;
  font-size: 1.1rem;
  background-color: #48c78e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.formulario button:hover {
  background-color: #3aa76e;
}

/* Tabla profesional */
.tabla-paises {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.tabla-paises thead {
  background-color: #048ba8;
  color: #fff;
}

.tabla-paises th,
.tabla-paises td {
  padding: 12px 15px;
  text-align: left;
}

.tabla-paises tbody tr:nth-child(even) {
  background-color: #f3f7f9;
}

.tabla-paises tbody tr:hover {
  background-color: #e1f5fe;
}

.tabla-paises th {
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.formulario span {
  color: red;
  font-size: 0.9rem;
  min-height: 1.2em;
  display: block;
}
</style>
