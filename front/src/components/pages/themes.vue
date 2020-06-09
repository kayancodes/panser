<template>
<div>
  <div class="inner">
    <!--- debut visuel desktop-->
    <h1 class="titredesktop">Mes pensées par thèmes</h1>
    <router-link :to="{name: 'page4'}"><input type="submit" value="Ajouter un thème" class="bouton_big bouton_theme desktop" /></router-link>
    <!--- fin visuel desktop-->

    <div class="wrapper lecture">

      <!--- debut visuel mobile-->
      <h1 class="titremobile">Mes pensées par thèmes</h1>
      <router-link :to="{name: 'page4'}"><input type="submit" value="Ajouter un thème" class="bouton_big bouton_theme mobile" /></router-link>
      <!--- fin visuel mobile-->

      <ul class="listUnite">
        <li v-for="item in items" class="unite">
          <router-link :to="{name: 'page5', params: {id:item.id_theme}}"><span>{{item.title}}</span></router-link>
          <div class="mini_boutons">
            <router-link :to="{name: 'page7', params: {id:item.id_theme}}"><button class="bouton_litle">Renommer</button></router-link>
            <button @click="doDelete(item.id_theme)" class="bouton_litle">Supprimer</button>
          </div>
        </li>
      </ul>

    </div>

  </div>


</div>
</template>





<script>

import axios from './../../axiosConf.js'

export default {
  mounted(){
    if (this.items.length === 0){
      this.$store.dispatch('recupItems')
    }
  },

  computed:{
    items(){
      return this.$store.state.items
    }
  },

  methods: {


    doDelete(id){

      if( confirm ("Le thème va etre supprimé")){
      const _this = this
      axios.delete('/theme/'+id)
      .then(function (response) {
        _this.$store.dispatch('recupItems')
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {}


    }


  }

}
</script>

<style scoped>
.bouton_theme{
  margin-bottom: 1.5rem;
}

.bouton_big.bouton_theme.desktop{
  display: none;
}

a{
  text-decoration: none;
  color:#000;
}




@media screen and (min-width:768px) and (max-width:1023px){


  .wrapper{
    background:url('../../assets/theme20.png') no-repeat center top;
    background-size: 100%;
  }

  .bouton_theme{
    width:55%;
  }

  .bouton_big.bouton_theme.mobile{
    display: none;
  }

  .bouton_big.bouton_theme.desktop{
    display: block;
  }


  .listUnite{
    padding-left:4rem;
  }


}

@media screen and (min-width:1024px){

  .wrapper{
    background:url('../../assets/theme20.png') no-repeat center top;
    background-size: 100%;
  }

  .bouton_theme{
    width:55%;
  }

  .bouton_big.bouton_theme.mobile{
    display: none;
  }

  .bouton_big.bouton_theme.desktop{
    display: block;
  }


  .listUnite{
    padding-left:4rem;
  }


}

</style>
