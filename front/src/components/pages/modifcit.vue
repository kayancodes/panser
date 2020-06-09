<template>
<div id="modifthemes">
  <div class="inner">

    <!--- debut visuel desktop-->
    <h1 class="titredesktop">Modifier la pensée</h1>
    <!--- fin visuel desktop-->

    <div class="wrapper ecrire">

      <div class="left">
        <h1>Modifier la pensée</h1></br>
        <span class="link">"{{OldCit}}"</span>

        <form>
          <label for="theme"></label><br>
          <textarea v-model="newCit" placeholder="" type="text" name="theme" id="theme" class="texte_in"></textarea>
        </form>

        <router-link :to="{name: 'page5', params: {id:idTheme}}"><input @click="doPost" type="submit" value="Valider" class="bouton_moy"></router-link>
        <router-link :to="{name: 'page5', params: {id:idTheme}}"><input type="submit" value="Retour" class="bouton_moy"></router-link>
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
      OldCit: "",
      newCit: "",
      idCitation: this.$route.params.idCitation,
      idTheme: this.$route.params.idTheme
    }
  },


  methods: { //methode=fonction
    test() {
      console.log(this.idTheme, this.idCitation)
    },

    doPost() {
      const _this = this
      if (this.newCit) {
        axios.put('/citation/' + this.idCitation, {
            texte: this.newCit
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }

  },

  mounted() {
    const id = this.idTheme
    console.log(id) //declaration du id
    const _this = this
    axios.get('/citation/' + id)
      .then(function(response) {
        _this.OldCit = response.data.find(item => item.id_citation === _this.idCitation).texte
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>




<style scoped>

.inner{
text-align: center;



}

</style>
