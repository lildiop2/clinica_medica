<template>
    <div>
        <Menu></Menu>
        <v-spacer></v-spacer>

        <v-parallax
    dark
    src="../assets/background-radial.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="6"
      >
       <v-card
    class="overflow-hidden mx-auto my-12 pa-md-4 mx-lg-auto"
    min-height="100%"
  >
  <v-card-title id="cadastro">
      Cadastrar Novo Endereço
    </v-card-title>
         <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="cep"
      :counter="9"
      :rules="cepRules"
      label="CEP"
      required
    ></v-text-field>


    <v-text-field
      v-model="logradouro"
      :rules="logradouroRules"
      label="Logradouro"
      required
    ></v-text-field>

    <v-text-field
      v-model="bairro"
      :rules="bairroRules"
      label="Bairro"
      required
    ></v-text-field>

    <v-text-field
      v-model="cidade"
      :rules="cidadeRules"
      label="Cidade"
      required
    ></v-text-field>

    <v-text-field
      v-model="estado"
      :rules="estadoRules"
      label="Estado"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
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
    components:{
        Menu,
        Footer
    },
     data: () => ({
      valid: true,
      cep: '',
      cepRules: [
        v => !!v || 'Cep é requerido',
        v => /.+-.+\..+/.test(v) || ( v && v.length <= 9) || 'cep tem que menos de 9 caractéres',
      ],
      logradouro: '',
      logradouroRules: [
         v => !!v || 'Logradouro é requerido'
      ],
      bairro: '',
      bairroRules: [
        v => !!v || 'Bairro é requerido'
      ],
      cidade: '',
      cidadeRules: [
        v => !!v || 'Cidade é requerida'
      ],
       estado: '',
      estadoRules: [
        v => !!v || 'Estado é requerido'
      ],

    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
    
}
</script>
<style scoped>
#cadastro{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    font-size: 25px;
    font-weight: bold;
}
</style>