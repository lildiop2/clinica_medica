<template>
  <v-footer
    dark
    padless
  
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 black--text text-center"
      min-width="100%"
      id="pe"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 black--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0">
                    <p>
                    Centro Federal de Educação Tecnológica de Minas Gerais - CEFET-MG
                    Av. Amazonas, 5.253, Nova Suiça, Belo Horizonte, MG, Brasil. CEP: 30.421-169
                    Telefone: +55 (31) 3319-7000
                    </p>
      </v-card-text>

      <!-- <v-divider></v-divider> -->

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Uai Clínica Médica</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
#pe{
  background-image: url("../assets/background.png");
  background-size: cover;

  
}
</style>