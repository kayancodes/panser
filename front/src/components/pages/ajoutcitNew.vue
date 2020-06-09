<template>
<div>
  <div class="inner">

    <!--- debut visuel desktop : visible uniquement en version desktop-->
    <h1 class="titredesktop">Ajouter une nouvelle pensée dans le theme :</br> <span class="link">{{nomTheme}}</span></h1>
    <!--- fin visuel desktop : : visible uniquement en version desktop-->

    <div class="wrapper ecrire">

      <div class="left">
          <!--- debut visuel mobile: visible uniquement en version mobile   -->
        <h1>Ajouter une nouvelle pensée dans le thème :</br> <span class="link">{{nomTheme}}</span></h1>
          <!--- fin visuel mobile : visible uniquement en version mobile -->
        <form>
          <p>Veuillez entrer la pensée</p>
          <textarea v-model="nameCitNew" name="citation" id="citation" class="texte_in"></textarea>
          <router-link :to="{name: 'page5', params:{id:idTheme}}"><input @click="doPostCN" type="submit" value="Valider" class="bouton_moy"></router-link>
          <router-link :to="{name: 'page5', params:{id:idTheme}}"><input type="submit" value="retour" class="bouton_moy bouton_back"></router-link>
        </form>
      </div>

      <div class="right">
        <img :src="require('../../assets/ecriture.png')" />
      </div>

    </div>

  </div>
</div>
</template>




<script>
  import axios from './../../axiosConf.js'

  export default {
    data() {
      return {
        nomTheme: "",
        nameCitNew: "",
        idTheme: this.$route.params.id,
      }
    },

    methods: {
      doPostCN() {
        axios.post('/citation', {
            texte: this.nameCitNew,
            id: this.idTheme,
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },

    mounted() {
      const id = this.idTheme; //declaration du idtheme le meme que plus haut dans data()
      const _this = this
      axios.get('/theme/' + id)
        .then(function(response) {
          _this.nomTheme = response.data
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  }
</script>




<style scoped>
  .inner {
    text-align: center;
  }

  .texte_in{
    padding-left: 2rem; padding-top: 1rem;
  }


</style>
