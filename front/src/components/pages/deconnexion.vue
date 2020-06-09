<template>
<div>
  <div class="inner">

    <h1>Déconnexion</h1>
    <p>Souhaitez-vous vraiment vous déconnecter de votre session ?</p>
    <button @click="deco" class="bouton_moy">Oui</button>
    <router-link :to="{name: 'page3'}"><button class="bouton_moy">non</button></router-link>

  </div>
</div>
</template>




<script>

import axios from './../../axiosConf.js'

export default {

  methods : {
    deco() {
      axios.get('/deconnexion')
        .then(response => {
          localStorage.removeItem("jwt");
          window.location.reload()
        })
    }
  }
}

</script>




<style scoped>

.inner{
text-align: center;
}

</style>
