<template>
<div id="menuMain">

  <nav class="navbar navbar-expand-lg navbar-light menu">
    <router-link :to="{name: 'page3'}"><a class="navbar-brand">Panser</a></router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">

      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link :to="{name: 'page3'}"><p class="direction">Mes thèmes</p></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'page11'}"><p class="direction">Déconnexion</p></router-link>
        </li>
      </ul>

    </div>
  </nav>

</div>
</template>



<script>
export default{
}
</script>




 <style scoped>

 a{
   text-decoration: none;
   color:#000;
 }

p.direction{
  font-size: 1.5rem;
}


.navbar-brand{
font-size: 3rem; font-weight: 600;
}

.navbar-expand-lg .navbar-collapse{
margin-top:3vh;
}

.menu{
background-color: #fff; border-bottom: 1px solid #4db6ac;
}

li{
text-align: center;
}

.navbar-toggler{
border:none;
}

.navbar-light .navbar-brand{
margin-left: 3vw;
}

button:focus{
  outline-color:#4db6ac;
}



@media screen and (min-width:1024px){
  a{
    margin-right: 30px; color:#000;
  }
}
 </style>
