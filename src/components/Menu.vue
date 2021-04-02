<template>
  <v-bottom-navigation
     v-model="value"
    :background-color="color"
  
  >
  <h1 id="titulo"><v-icon>mdi-hospital-building</v-icon> UAI CLÍNICA MÉDICA</h1>
    <v-btn>
        <router-link class="nav" to="/">Home
        <v-icon>mdi-home</v-icon>
        </router-link>

      
    </v-btn>

     <v-btn>
      <router-link class="nav" to="/galeria">Galeria
      <v-icon>mdi-image</v-icon>
      </router-link>
    </v-btn>

    <v-btn>
       <router-link class="nav" to="/novoendereco">Novo Endereco
       <v-icon>mdi-content-save-edit</v-icon>
       </router-link>

      
    </v-btn>

    <v-btn>
      <router-link class="nav" to="/login">Login
      <v-icon>mdi-login</v-icon>
      </router-link>

      
    </v-btn>

  

    <v-btn>
          <router-link class="nav" to="/about">About
            <v-icon>mdi-information</v-icon>
          </router-link>
    
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>

<style scoped>
.nav a.router-link-exact-active {
  color: #42b983;
  
}
.nav{
    text-decoration: none;
    color: black;
}

#titulo{
  left: 10px;
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

</style>