<template>
<div>
  <div class="inner">

    <!--- debut visuel desktop-->
    <h1 class="titredesktop">Ajouter une citation déja existante dans le theme <br /> <span class="link">{{nameTheme}}</span></h1>
    <!--- fin visuel desktop-->


    <div class="wrapper lecture ">

      <h1>Ajouter une citation déja existante dans le theme <br /> <span class="link">{{nameTheme}}</span></h1>

      <ul class="listUnite">
        <li v-for="citation in citations" class="unite">
          <span>" {{citation.texte}} "</span>
          <div class="mini_boutons">
            <router-link :to="{name: 'page5', params: {id:idTheme}}"><button @click="doPost(citation.id_citation)" class="bouton_litle">ajouter</button></router-link>
          </div>
        </li>
      </ul>

      <router-link :to="{name: 'page5', params:{id:idTheme}}"><input type="submit" value="retour" class="bouton_moy bouton_back"></router-link>

    </div>


  </div>
</div>
</template>




<script>
import axios from './../../axiosConf.js'

export default {

  data() {
    return {
      citations: [],
      idTheme: this.$route.params.id,
      nameTheme: ""
    }
  },

  mounted() {
    const id = this.idTheme
    const _this = this
    axios.get('/citationAll/')
      .then(function(response) {
        _this.citations = response.data
      })
      .catch(function(error) {
        console.log(error);
      });
    axios.get('/theme/' + id)
      .then(function(response) {
        _this.nameTheme = response.data
      })
      .catch(function(error) {
        console.log(error);
      });
  },


  methods: {
    doPost(id) {
      const _this = this
      axios.post('/citationSingle/', {
          idTheme: this.idTheme,
          idCitation: id
        })
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>




<style scoped>
@media screen and (min-width:768px) and (max-width:1023px) {
  .wrapper.lecture {
    background: url('../../assets/lecture20.png') no-repeat center top;
    background-size: 100%;
  }
}

@media screen and (min-width:1024px) {
  .wrapper.lecture {
    background: url('../../assets/lecture20.png') no-repeat center top;
    background-size: 100%;
  }
}
</style>
