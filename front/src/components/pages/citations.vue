<template>
<div>
  <div class="inner">

    <!--- debut visibilité desktop-->
    <h1 class="titredesktop">Mes pensées du thème :<br /> <span class="link">{{nomTheme}}</span></h1>

    <router-link :to="{name: 'page8',  params: {id:idTheme}}"><input type="submit" value="Ajouter une nouvelle citation" class="bouton_big bouton_theme desktop"></router-link>
    <router-link :to="{name: 'page10', params: {id:idTheme}}"><input type="submit" value="Ajouter une citation existante" class="bouton_big bouton_theme desktop"></router-link>
    <!--- fin visibilité desktop-->


    <div class="wrapper lecture">

      <!--- debut visibilité mobile-->
      <h1>Mes pensées du thème :<br /> <span class="link">{{nomTheme}}</span></h1>
      <router-link :to="{name: 'page8',  params: {id:idTheme}}"><input type="submit" value="Ajouter une nouvelle citation" class="bouton_big bouton_theme mobile"></router-link>
      <router-link :to="{name: 'page10', params: {id:idTheme}}"><input type="submit" value="Ajouter une citation existante" class="bouton_big bouton_theme mobile"></router-link>
      <!--- fin visibilité mobile-->

      <ul class="listUnite">
        <li v-for="citation in citations" class="unite">
          <span>" {{citation.texte}} "</span>
          <div class="mini_boutons">
            <router-link :to="{name: 'page9', params: {idCitation:citation.id_citation, idTheme:idTheme}}"><button class="bouton_litle">modifier</button></router-link>
            <button @click="doDelete(citation.id_theme_citation)" class="bouton_litle">supprimer du theme</button>
            <button @click="doDeleteAll(citation.id_citation)" class="bouton_litle">supprimer du systeme</button>
          </div>
        </li>
      </ul>

      <router-link :to="{name: 'page3', params:{id:idTheme}}"><input type="submit" value="retour" class="bouton_moy bouton_back mobile"></router-link>

    </div>

    <router-link :to="{name: 'page3', params:{id:idTheme}}"><input type="submit" value="retour" class="bouton_moy bouton_back desktop"></router-link>

  </div>
</div>
</template>

<script>
import axios from './../../axiosConf.js'

export default {

  data() {
    return {
      nomTheme: "",
      idTheme: this.$route.params.id,
      citations: []
    }
  },

  mounted() {
    const id = this.idTheme //declaration du idtheme le meme que plus haut dans data()
    const _this = this
    axios.get('/theme/' + id)
      .then(function(response) {
        _this.nomTheme = response.data
      })
      .catch(function(error) {
        console.log(error);
      });
    setTimeout(() => {
      this.doGet()
    }, 300)
  },



  methods: {
    doDelete(id) {
      if (confirm("la citation va etre supprimé du theme")) {
        const _this = this
        axios.delete('/citation/' + id)
          .then(function(response) {
            _this.doGet()
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {}
    },

    doDeleteAll(id) {
      if (confirm("la citation va etre supprimé du systeme")) {
        const _this = this
        axios.delete('/citationAll/' + id)
          .then(function(response) {
            _this.doGet()
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {}
    },

    doGet() {
      const id = this.idTheme
      const _this = this
      axios.get('/citation/' + id)
        .then(function(response) {
          _this.citations = response.data
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>




<style scoped>
.bouton_big.bouton_theme.mobile {
  display: block;
  margin-bottom: 1.2rem;
}

.bouton_big.bouton_theme.desktop {
  display: none;
}

.desktop {
  display: none;
}

.mobile {
  display: block;
}

span {
  font-size: 2rem;
  display: block;
  width: 100%;
}



@media screen and (min-width:768px) and (max-width:1023px) {
  .wrapper.lecture {
    background: url('../../assets/lecture20.png') no-repeat center top;
    background-size: 100%;
  }

  .bouton_big.bouton_theme.mobile {
    display: none;
  }

  .bouton_big.bouton_theme.desktop {
    display: block;
    margin-bottom: 1.2rem;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }
}

@media screen and (min-width:1024px) {
  .wrapper.lecture {
    background: url('../../assets/lecture20.png') no-repeat center top;
    background-size: 100%;
  }

  .bouton_big.bouton_theme.mobile {
    display: none;
  }

  .bouton_big.bouton_theme.desktop {
    display: block;
    margin-bottom: 1.2rem;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
  }
}
</style>
