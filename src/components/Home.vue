<template>
<div id="corpo">
    <Menu/>
    <!-- <v-spacer></v-spacer> -->

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
            <p>A UAI Clínica-Médica Atenção a Saúde nasceu com o objetivo de prestar um serviço de qualidade, especializado no atendimento ao cliente no domicílio. A partir de uma demanda cada vez mais constante pela procura de outros serviços, surgiu então a Clínica UAI Clínica Médica.</p>

            <p>Com uma estrutura adequada, oferecemos consultas médicas em várias especialidades, serviços de fisioterapia e pilates, nutrição, psicologia, entre outros.</p>

            <p>Nosso maior diferencial consiste em prestar um atendimento humanizado, individualizado, com qualidade e respeito aos clientes, promovendo o bem-estar do paciente e a tranquilidade dos familiares.</p>

            <p>Dispomos de uma equipe multidisciplinar especializada para atender, além de uma equipe administrativa capaz de apresentar soluções rápidas e efetivas para cada necessidade de nossos parceiros, clientes, pacientes e equipes.</p>
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
                    <p>
                      Cuidar, com excelência, da saúde dos nossos clientes em todas as etapas da vida, proporcionando-lhes uma atenção individualizada, com profissionais componentes.</p>
                    <p>Ser reconhecida pela excelência no atendimento de nossos clientes e na gestão de nossos colaboradores.</p>
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

                        <ul>
                        <li>Confiança</li>
                        <li>Ética</li>
                        <li>Integridade</li>
                        <li>Transparência</li>
                        <li>Comprometimento</li>
                        <li>Responsabilidade</li>
                        </ul>
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
#corpo{
  background-image: url("../assets/background-radial.jpg");
   background-size: cover;
}
</style>