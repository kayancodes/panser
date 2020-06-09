<template>
<div>
  <div class="inner">
    <!--- debut visuel desktop-->
    <h1 class="titredesktop">Créer un compte Panser</h1>

    <div class="textDesktop">
      <h1>Créer un compte Panser</h1>
      <p>Veuillez entrez vos informations ci-dessous<br>
        (*Champs obligatoires)</p>
    </div>
    <!--- fin visuel desktop-->


    <div class="wrapper">
      <!--- debut visuel mobile-->
      <div class="textmobile">
        <h1>Créer un compte Panser</h1>
        <p>Veuillez entrez vos informations ci-dessous<br>
          (*Champs obligatoires)</p>
      </div>
      <!--- fin visuel mobile-->

      <div class="left">
        <form>
          <label for="pseudo"></label><br>
          <input v-model="user.pseudoAuteur" type="text" placeholder="Pseudonyme *" name="pseudo" id="pseudo" class="texte_in">

          <label for="mail"></label><br>
          <input v-model="user.mailAuteur" type="email" placeholder="E-mail *" name="mail" id="mail" class="texte_in">

          <label for="pswd"></label><br>
          <input v-model="user.pswdAuteur" type="password" placeholder="mot de passe *" name="pswd" id="pswd" class="texte_in">

          <label for="pswd"></label><br>
          <input v-model="user.pswdAuteurConf" type="password" placeholder="Confirmer le mot de passe *" name="pswd" id="pswdConf" class="texte_in">

          <input @click="doPost" type="submit" value="Valider" class="bouton_moy">

          <p>{{msg}}</p>
        </form>

        <router-link :to="{name: 'page1'}"><input @click="doPost" type="submit" value="Retour" class="bouton_moy back mobile"></router-link>
      </div>

      <div class="right">
        <img :src="require('../../assets/enr.png')" />
      </div>

    </div>


    <div class="textbottomDesktop">
      <router-link :to="{name: 'page1'}"><input @click="doPost" type="submit" value="Retour" class="bouton_moy back desktop "></router-link>
    </div>



  </div>
</div>
</template>




<script>
import axios from './../../axiosConf.js'

export default {
  data() {
    return {
      user: {
        pseudoAuteur: "",
        mailAuteur: "",
        pswdAuteur: "",
        pswdAuteurConf: ""
      },

      msg: ""
    }
  },

  methods: {
    doPost() {
      if (this.user.pseudoAuteur && this.user.mailAuteur && this.user.pswdAuteur && this.user.pswdAuteurConf) {
        if (this.user.pswdAuteurConf === this.user.pswdAuteur) {
          axios.post('/register', this.user)
            .then(res => {
              this.msg = res.data
            }) //this.user  = la data quon envoi

        } else {
          this.msg = "Les mots de passe ne correspondent pas."
        }
      } else {
        this.msg = "Vous n'avez pas renseigné tous les champs"
      }
    }
  }

}
</script>




<style scoped>
.inner{
text-align: center;
}


input.texte_in{
  margin-top: 1rem;
}

input.texte_in.psw{
  margin-top: 1rem;
    margin-bottom: 2rem;
}

.bouton_moy{
  margin-top: 2rem;
  margin-bottom: 13vh;
}

.bouton_moy.enr{
  margin-bottom: 0rem;
}

.bouton_moy.back.mobile{
  margin-bottom: 2rem;
  display: block;
}

.bouton_moy.back.desktop{
  margin-bottom: 0rem;
  display: none;
}



.textbottomMobile{
  display: block;
}

.textbottomDesktop{
  display: none;
}

a{
  text-decoration: none;
  color:#000;
}










@media screen and (min-width:768px) and (max-width:1023px){

.left{
  width:40%;
}

.right{
  display: block; width:60%;
}

.right img{
  display: block; width:100%; margin-top:0vh;
}


.bouton_moy{
  margin-top: 0px;
  margin-bottom: 6rem;
  width:40%;
}

.bouton_moy.enr{
  margin-bottom: 0rem;
}


input.texte_in{
  margin-top: 1rem;
}

.textbottomDesktop{
  display: block;
  margin-top: 1rem;
  margin-bottom: 2rem;
}


.bouton_moy.back.mobile{
  margin-bottom: 0rem;
  display: none;
}

.bouton_moy.back.desktop{
  margin-bottom: 0rem;
  display: block;
  margin-top: 18vh;
}

.bouton_moy{
  margin-top: 2rem;
}


.textbottomMobile{
  display: none;
}

.textbottomDesktop{
  display: block;
}

}

@media screen and (min-width:1024px){

  .left{
    width:40%;
  }

  .right{
    display: block; width:60%;
  }

  .right img{
    display: block; width:100%; margin-top:0vh;
  }


  .bouton_moy{
    margin-top: 0px;
    margin-bottom: 6rem;
    width:40%;
  }

  .bouton_moy.enr{
    margin-bottom: 0rem;
  }


  input.texte_in{
    margin-top: 1rem;
  }

  .textbottomDesktop{
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }


  .bouton_moy.back.mobile{
    margin-bottom: 0rem;
    display: none;
  }

  .bouton_moy.back.desktop{
    margin-bottom: 0rem;
    display: block;
    margin-top: 18vh;
  }

  .bouton_moy{
    margin-top: 2rem;
  }


  .textbottomMobile{
    display: none;
  }

  .textbottomDesktop{
    display: block;
  }

}




</style>
