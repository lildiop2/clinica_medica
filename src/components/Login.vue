<template>
<div>
    <Menu></Menu>
    <v-spacer></v-spacer>
       
   <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
      >
            <v-card
            elevation="2"
            loading
            tile
            class="mx-auto my-12 pb-md-4 mx-lg-auto"
            max-width="374"
            
            >

    <v-toolbar
      flat
      color="indigo"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        Perfil do Usuario
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
            
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >


    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="senha"
      :rules="senhaRules"
      label="Senha"
      required
    ></v-text-field>

    

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
      
    >
      Conectar
    </v-btn>
  </v-form>
            </v-card>
      </v-col>
    </v-row>
  </v-parallax>

    <Footer></Footer>
</div>
    
</template>

<script>
import Menu from './Menu'
import Footer from './Footer'
export default {
    components: {
        Menu,
        Footer
    },
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail é requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail tem quer ser válido',
      ],
       senha: '',
      senhaRules: [
        v => !!v || 'Senha  é requerida',
      ],
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
    
}
</script>

<style scoped>

</style>