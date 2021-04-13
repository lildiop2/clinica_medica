<template>
<div id="corpo-galeria">
<Menu></Menu>
    <!-- <v-spacer></v-spacer> -->

  <v-card
    class="mx-auto"
  >

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          class="plano-de-fundo"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <Footer></Footer>
</div>
</template>


<script>
import Menu from './Menu'
import Footer from './Footer'
  export default {
    components: { Menu ,Footer},
    data: () => ({
      cards: [
        { title: 'Atendimento', src: 'https://www.bluesclinic.com.br/wp-content/uploads/2018/07/Cl%C3%ADnica-Blues-4.jpg', flex: 12 },
        { title: 'Cardiologia', src: 'https://hspaulo.com.br/uploads/servicos/7/original/Sala_Proc_01-min.jpg', flex: 6 },
        { title: 'Sala de  Cirurgia', src: 'https://portaldomedico.blob.core.windows.net/noticias/d45mq3sala.jpg', flex: 6 },
        { title: 'Laboratório', src: 'https://www.hospitalbelohorizonte.com.br/images/laboratorio.jpg', flex: 12 },
      ],
    }),
  }
</script>


<style scoped>
#corpo-galeria{
  background-image: url("../assets/background-radial.jpg");
  background-size: cover;
}
.plano-de-fundo{
  background-image: url("../assets/background-radial.jpg");
  background-size: cover;
}
</style>