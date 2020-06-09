<template>
<div id="modifthemes">
  <div class="inner">

    <!--- debut visuel desktop-->
    <h1 class="titredesktop">Renommer le thème </br> <span class="link">{{oldTheme}}</span></h1>
    <!--- fin visuel desktop-->

    <div class="wrapper ecrire">

      <div class="left">
        <!--- debut visuel mobile-->
        <h1>Renommer le thème <br /> <span class="link">{{oldTheme}}</span></h1>
        <!--- fin visuel mobile-->
        <p>Entrer le nouveau nom du thème </p>
        <input class="texte_in" v-model="newTheme" placeholder="" type="text" name="theme" id="theme">
        <router-link :to="{name: 'page3'}"><input @click="doPost" type="submit" value="Valider" class="bouton_moy"></router-link>
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
      oldTheme: "",
      newTheme: "",
      id: this.$route.params.id
    }
  },

  methods: { //methode=fonction
    doPost() {
      const _this = this
      if (this.newTheme) { //if (this.newTheme) = en gros si input vide en quon appuie sur valider, la fonction ne poste pas de ligne vide et on retourne tout simplement vers la page "theme.vue"
        axios.put('/theme/' + this.id, {
            title: this.newTheme
          })
          .then(function(response) {
            console.log(response);
            _this.$store.dispatch('recupItems')
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },

  mounted() {
    const id = this.id //declaration du id
    const _this = this
    axios.get('/theme/' + id)
      .then(function(response) {
        _this.oldTheme = response.data
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>




<style scoped>
.inner {
  text-align: center;
}

img.right {
  margin-top: 0vh;
}

.wrapper.ecrire {
  display: flex;
}
</style>
