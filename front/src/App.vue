<template>
  <div id="app">
    <menu-main></menu-main>
    <router-view></router-view>
  </div>
</template>

<script>
import menuMain from './components/menu/menu.vue'
export default {
  components: {
    menuMain
  }
}
</script>





<style>

/* --DEBUT ELEMENTS------------------------------ */
body{
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;

}




html{
  font-size: 3.25vw;
}

a{
  text-decoration: none; color:#000;
}

li{
  list-style-type: none;
}


.inner{
 border:1px solid transparent; padding: 0 5%; width:100%;
}


h1{
text-align: center; color:#d3D3D3; font-size: 2rem; margin: 2.5rem 0 2.3rem;
}

h1.titredesktop{
  display: none;
}

p{
  color:#000; font-size: 1rem;
}

span{
  font-size: 2rem;
  display: block;
  width:100%;

}

.mini_boutons  .bouton_litle{
  font-size: 0.5rem;
  background-color: #D3D3D3;
  border-radius: 0.4rem;
  color:#000;
}








/* --DEBUT LISTE------------------------------ */

ul.listUnite{
  padding-left: 0px;
}

.unite{
  border-bottom: 1px solid #4db6ac; padding: 1.4rem 0rem
}








/* ------DEBUT MOBILE DESKTOP-------------------------- */
.titredesktop{
  display: none;
}

.textDesktop{
  display: none;
}






/* --DEBUT FORMULAIRE------------------------------ */
input{
  height:2.7rem
}

input::placeholder{
  padding-left: 8%;
  color:lightgrey;
}


.texte_in{
    border:1px solid #505050; width:70%; border-radius: 0.4rem;
    margin-top: 1rem; width:90%;
}


.bouton_moy{
  display: block;
  width:30%; margin:0 auto; background-color: #4db6ac;
  border-radius: 0.4rem; color:white; padding:0.2rem; margin-top:2rem;
  border-color: inherit;
}


.bouton_back{
  margin: 3rem auto;
}




.bouton_big{
  background-color: #4db6ac; border:1px solid transparent;
  border-radius: 0.4rem; width: 82%;display: block;
  margin:0 auto; text-align: center; color:#fff;
  padding:0.6rem;
}

.bouton_big.bouton_bas{
  margin:-1.8rem auto 2.5rem;
}





.bouton_litle{
  color:lightgrey; font-size: 0.9rem;
}



span.link{
color: #4db6ac; font-size: 1.6rem;
}



.right img{
  display: none;
}

.left{
  width:100%;
}






@media screen and (min-width:768px) and (max-width:1023px){
  html{
    font-size: 16px;
  }

  .inner{
    width:48rem; border:1px solid transparent;
     margin:0 auto;
  }

  .wrapper{
    display: flex; border:1px solid transparent;
  }

  .wrapper.lecture{
    display: block;
  }


  h1{
  display: none;
  }

  h1.titredesktop{
    display: block;
  }



  .left{
    width:50%;
  }

  .right{
    display: block; width:50%;
  }

  .right img{
    display: block; width:100%; margin-top:8vh;
  }




  /* ----DEBUT MOBILE DESKTOP ---------------------------- */

  .textmobile{
    display: none
  }

  .textDesktop{
    display: block;
  }

  .titredesktop{
    display: block;
  }


  .textbottom{
    display: none;
  }

  .textbottomDesktop{
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .textbottomMobile{
    display: none;
    margin-bottom: 2rem;
  }

  .bouton_moy.desktop{
    display:none;
  }


  .wrapper.lecture{
    min-height: 48vh;
  }



  .listUnite, .unite{
    width:100%;
  }

}/* ---fin tablette----- */









@media screen and (min-width:1024px){

  html{
    font-size:16px;
  }

  .inner{
    width:62.5rem; border:1px solid transparent;
     margin:0 auto;
  }



  .wrapper{
    display: flex; border:1px solid transparent;
  }

  .wrapper.lecture{
    display: block;
  }


  h1{
  display: none;
  }

  h1.titredesktop{
    display: block;
  }



  .left{
    width:50%;
  }

  .right{
    display: block; width:50%;
  }

  .right img{
    display: block; width:100%; margin-top:8vh;
  }




  /* ----DEBUT MOBILE DESKTOP ---------------------------- */

  .textmobile{
    display: none
  }

  .textDesktop{
    display: block;
  }

  .titredesktop{
    display: block;
  }


  .textbottom{
    display: none;
  }

  .textbottomDesktop{
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .textbottomMobile{
    display: none;
    margin-bottom: 2rem;
  }

  .bouton_moy.desktop{
    display:none;
  }


  .wrapper.lecture{
    min-height: 48vh;
  }



  .listUnite, .unite{
    width:100%;
  }

}


</style>
