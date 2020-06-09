<template>
<div id="ajoutthemes">
  <div class="inner">

    <!--- debut visuel desktop-->
    <h1 class="titredesktop">Ajouter un nouveau thème</h1>
    <!--- fin visuel desktop-->


    <div class="wrapper ecrire">

      <div class="left">
        <h1>Ajouter un nouveau thème</h1>
        <p>Veuillez entrer le nom du nouveau thème</p>
        <form>
          <input class="texte_in" v-model="nameTheme" placeholder="" type="text" name="theme" id="theme">
          <router-link :to="{name: 'page3'}"><input @click="doPost" type="submit" value="Valider" class="bouton_moy"></router-link>
          <router-link :to="{name: 'page3'}"><input type="submit" value="retour" class="bouton_moy"></router-link>
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
      nameTheme: "" //nameTheme=variable qui va etre égal à v-model
    }
  },

  methods: { //methode= déclaration de fonctions
    doPost() {
      if (this.nameTheme) {
        const _this = this
        axios.post('/theme', {
            title: this.nameTheme
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
}
</script>




<style scoped>

.inner {
  text-align: center;
}

.right img {
  margin-top: 0vh;
}

.wrapper.ecrire {
  display: flex;
}

.texte_in{
  padding-left: 2rem;
}



</style>
