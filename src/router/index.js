import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import EstudianteTablaView from '../views/EstudianteTablaView.vue'
import PaisTablaView from '../views/PaisTablaView.vue'
import PokemonView from '../views/PokemonView.vue'
import ResponsivoView from '../views/ResponsivoView.vue'

const routes = [
  {
    path: '/responsivo',
    name: 'responsivoView',
    component: ResponsivoView
  },
  {
    path: '/pokemon',
    name: 'pokemonView',
    component: PokemonView
  },
  {
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
  {
    path: '/estudiante_tabla',
    name: 'estudianteTablaView',
    component: EstudianteTablaView
  },
  {
    path: '/pais_tabla',
    name: 'paisTablaView',
    component: PaisTablaView
  },

  {
    path: '/contador/numeros',
    name: 'contadorView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contadorView" */ '../views/ContadorView.vue')
  },
    {
    path: '/pregunta',
    name: 'preguntaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preguntaView" */ '../views/PreguntaView.vue')
  },
    {
    path: '/holamundo',
    name: 'holamundoView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "holamundoView" */ '../views/HolaMundoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
