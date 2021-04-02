<template>
<div>
    <Menu/>
    <v-spacer></v-spacer>

<v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    
    </v-carousel-item>
  </v-carousel>

  <v-container fluid>
      <v-row dense>
        <v-col cols="6">
          
          <v-card
            elevation="2"
            outlined
          >
          <v-card-title>
            Descrição
          </v-card-title>
          <v-card-text class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus nibh, finibus et efficitur a, dapibus vel elit. Maecenas quis dapibus tortor. Vivamus feugiat ullamcorper dolor, in aliquam lacus commodo ac. Aenean non lacinia urna. Duis volutpat commodo iaculis. Etiam interdum pulvinar eros, consequat porta purus rutrum sed. Duis cursus lacus non eros euismod mollis. Fusce et urna erat. Donec sed commodo elit, eu commodo nisl. Quisque et nulla in elit interdum cursus eget et lacus. Aenean volutpat turpis eu felis lobortis ornare. Curabitur ut odio rhoncus, mattis lectus ut, viverra ante.

          Duis at pharetra tortor. Suspendisse vel viverra dui. Sed vestibulum eget ex at feugiat. Nam scelerisque egestas tincidunt. Vivamus ante est, pharetra id rutrum eget, laoreet id orci. Etiam sodales sapien est, sit amet pellentesque risus lobortis in. Donec tincidunt id arcu at viverra. Morbi tempus eu leo ac molestie. Quisque malesuada turpis sed nulla fermentum rhoncus. Duis lacinia elit eu odio pellentesque, et cursus arcu hendrerit.

          Sed eget tellus sit amet justo placerat ultrices. Curabitur iaculis lacus et vestibulum finibus. Quisque condimentum sapien sed eros dictum condimentum. Etiam semper urna ut cursus faucibus. Etiam tristique lacus aliquam molestie consectetur. Praesent ut arcu vel odio egestas finibus. Phasellus at feugiat eros. Mauris a lorem lobortis magna dictum ullamcorper eu sit amet sem.
          </v-card-text>
          </v-card>

        </v-col>



                 <v-col cols="6">
                  
                  <v-card
                    elevation="2"
                    outlined
                  >
                  
                  <v-card-title>
                    Missão
                  </v-card-title>
                  <v-card-text class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus nibh, finibus et efficitur a, dapibus vel elit. Maecenas quis dapibus tortor. Vivamus feugiat ullamcorper dolor, in aliquam lacus commodo ac. Aenean non lacinia urna. Duis volutpat commodo iaculis. Etiam interdum pulvinar eros, consequat porta purus rutrum sed. Duis cursus lacus non eros euismod mollis. Fusce et urna erat. Donec sed commodo elit, eu commodo nisl. Quisque et nulla in elit interdum cursus eget et lacus. Aenean volutpat turpis eu felis lobortis ornare. Curabitur ut odio rhoncus, mattis lectus ut, viverra ante.

          Duis at pharetra tortor. Suspendisse vel viverra dui. Sed vestibulum eget ex at feugiat. Nam scelerisque egestas tincidunt. Vivamus ante est, pharetra id rutrum eget, laoreet id orci. Etiam sodales sapien est, sit amet pellentesque risus lobortis in. Donec tincidunt id arcu at viverra. Morbi tempus eu leo ac molestie. Quisque malesuada turpis sed nulla fermentum rhoncus. Duis lacinia elit eu odio pellentesque, et cursus arcu hendrerit.

          Sed eget tellus sit amet justo placerat ultrices. Curabitur iaculis lacus et vestibulum finibus. Quisque condimentum sapien sed eros dictum condimentum. Etiam semper urna ut cursus faucibus. Etiam tristique lacus aliquam molestie consectetur. Praesent ut arcu vel odio egestas finibus. Phasellus at feugiat eros. Mauris a lorem lobortis magna dictum ullamcorper eu sit amet sem.
          </v-card-text>
                  
                  </v-card>

                </v-col>
         <v-col cols="12">
          
           <v-card
                    elevation="2"
                    outlined
                  >
                  
                  <v-card-title>
                    Valores
                  </v-card-title>
                  <v-card-text class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus nibh, finibus et efficitur a, dapibus vel elit. Maecenas quis dapibus tortor. Vivamus feugiat ullamcorper dolor, in aliquam lacus commodo ac. Aenean non lacinia urna. Duis volutpat commodo iaculis. Etiam interdum pulvinar eros, consequat porta purus rutrum sed. Duis cursus lacus non eros euismod mollis. Fusce et urna erat. Donec sed commodo elit, eu commodo nisl. Quisque et nulla in elit interdum cursus eget et lacus. Aenean volutpat turpis eu felis lobortis ornare. Curabitur ut odio rhoncus, mattis lectus ut, viverra ante.

          Duis at pharetra tortor. Suspendisse vel viverra dui. Sed vestibulum eget ex at feugiat. Nam scelerisque egestas tincidunt. Vivamus ante est, pharetra id rutrum eget, laoreet id orci. Etiam sodales sapien est, sit amet pellentesque risus lobortis in. Donec tincidunt id arcu at viverra. Morbi tempus eu leo ac molestie. Quisque malesuada turpis sed nulla fermentum rhoncus. Duis lacinia elit eu odio pellentesque, et cursus arcu hendrerit.

          Sed eget tellus sit amet justo placerat ultrices. Curabitur iaculis lacus et vestibulum finibus. Quisque condimentum sapien sed eros dictum condimentum. Etiam semper urna ut cursus faucibus. Etiam tristique lacus aliquam molestie consectetur. Praesent ut arcu vel odio egestas finibus. Phasellus at feugiat eros. Mauris a lorem lobortis magna dictum ullamcorper eu sit amet sem.
          </v-card-text>
                  
                  </v-card>

        </v-col>
      </v-row>
    </v-container>


  <Footer></Footer>
</div>
</template>

<script>
import Menu from './Menu.vue'
import Footer from './Footer'
export default  {
  components: { Menu ,Footer},
  data () {
      return {
       items: [
          {
            src: 'http://www.aen.pr.gov.br/modules/galeria/uploads/62238/news_interna__MG_1663.jpg',
          },
          {
            src: 'https://conteudo.imguol.com.br/c/noticias/8e/2020/05/28/26mai2020---finalizacao-de-obras-no-hospital-de-campanha-em-sao-goncalo-administrado-pelo-iabas-instituto-de-atencao-basica-e-avancada-a-saude-no-rio-de-janeiro-1590668514569_v2_900x506.jpg',
          },
          {
            src: 'https://www.amato.com.br/wp-content/uploads/2015/09/day-hospital-930x620.webp',
          },
          {
            src: 'https://i.pinimg.com/originals/57/1f/d2/571fd28ce80b7902bfc61ca7e6119fe9.jpg',
          },
        ],
        cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
      }
    },
}

</script>


<style scoped>

</style>