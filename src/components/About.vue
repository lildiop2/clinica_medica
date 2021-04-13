<template>
    <div id="corpo-about">
    <Menu></Menu>
       <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://www.hospitalmarcelino.com.br/wp-content/uploads/2018/12/areamedica-credenciamento-medico.png"
      height="400px"
    ></v-img>

    <v-card-title>
     Anderson Pelegrini
    </v-card-title>

    <v-card-subtitle>
      Diretor Geral
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

     <Footer></Footer>
    </div>
</template>

<script>
import Menu from './Menu'
import Footer from './Footer'
export default {
    components: { Menu ,
    Footer},
    data: () => ({
      show: false,
    }),
}
</script>

<style scoped>
#corpo-about{
  background-image: url("../assets/background-radial.jpg");
   background-size: cover;
}
</style>