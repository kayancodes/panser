<template>
<div>
  <div class="inner">

    <!--- debut visuel desktop-->
    <h1 class="titredesktop">Accédez à votre compte Panser</h1>

    <div class="textDesktop">
      <h1>Accédez à votre compte Panser</h1>
      <p>Veuillez entrez vos informations ci-dessous<br>
        (*Champs obligatoires)</p>
    </div>
    <!--- fin visuel desktop-->


    <div class="wrapper">

      <div class="left">
        <!--- debut visuel mobile-->
        <div class="textmobile">
          <h1>Accédez à votre compte Panser</h1>
          <p>Veuillez entrez vos informations ci-dessous<br>
            (*Champs obligatoires)</p>
        </div>
        <!--- fin visuel mobile-->

        <form>
          <label for="mail"></label><br>
          <input v-model="auteur.mail" type="email" placeholder="E-mail *" name="mail" id="mail" class="texte_in">
          <label for="password"></label><br>
          <input v-model="auteur.password" type="password" placeholder="mot de passe *" name="password" id="password" class="texte_in psw">
        </form>
        <br>
        <input @click="onSubmit" type="submit" value="Bouton" class="bouton_moy">

        <!--- debut visuel mobile-->
        <div class="textbottomMobile">
          <p>Vous ne possedez pas encore de compte ?</p>
          <router-link :to="{name: 'page2'}"><input type="submit" value="S'inscrire" class="bouton_moy mobile"></router-link>
        </div>
        <!--- fin visuel mobile-->
      </div>

      <div class="right">
        <img :src="require('../../assets/login.png')" />
      </div>

    </div>

    <!--- debut visuel desktop-->
    <div class="textbottomDesktop">
      <p>Vous ne possedez pas encore de compte ?</p>
      <router-link :to="{name: 'page2'}"><input type="submit" value="S'inscrire" class="bouton_moy"></router-link>
    </div>
    <!--- fin visuel desktop-->

  </div>
</div>
</template>




<script>
import axios from './../../axiosConf.js'

export default {
  data() {
    return {
      auteur: {
        mail: "",
        password: ""
      },
      message: ''
    }
  },

  methods: {
    onSubmit() {
      const _this = this
      axios.post('/login', {
          mail: this.auteur.mail,
          password: this.auteur.password
        })
        .then(function(response) {
          if (response.data.status === 'OK') {
            _this.message = response.data.message
            localStorage.setItem('jwt', response.data.token)
            window.location.reload()
          } else {
            _this.message = response.data.message
          }
        })
    }
  }
}
</script>




<style scoped>
.inner {
  text-align: center;
}

input.texte_in {
  margin-top: 1rem;
}

input.texte_in.psw {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.bouton_moy {
  margin-top: 0px;
  margin-bottom: 23vh;
}

.bouton_moy.mobile {
  margin-bottom: 1vh;
}

.textbottomMobile {
  display: block;
}

.textbottomDesktop {
  display: none;
}

.texte_in{
  padding-left: 2rem;
}

a{
  text-decoration: none;
  color:#000;
}


@media screen and (min-width:768px) and (max-width:1023px) {

  .left {
    width: 40%;
  }

  .right {
    display: block;
    width: 60%;
  }

  .right img {
    display: block;
    width: 100%;
    margin-top: 0vh;
  }

  .bouton_moy {
    margin-top: 0px;
    margin-bottom: 6rem;
    width: 40%;
  }

  input.texte_in {
    margin-top: 4rem;
  }

  .textbottomMobile {
    display: none;
  }

  .textbottomDesktop {
    display: block;
    margin-top: 25vh;
    width: 49%;
    margin: 0 auto;
  }



}

@media screen and (min-width:1024px) {
  .left {
    width: 40%;
  }

  .right {
    display: block;
    width: 60%;
  }

  .right img {
    display: block;
    width: 100%;
    margin-top: 0vh;
  }

  .bouton_moy {
    margin-top: 0px;
    margin-bottom: 6rem;
    width: 40%;
  }

  input.texte_in {
    margin-top: 5rem;
  }

  .textbottomMobile {
    display: none;
  }

  .textbottomDesktop {
    display: block;
    margin-top: 8vh;
    width: 45%;
    margin: 0 auto;
  }
}
</style>
