import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from './axiosConf.js'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'hash',
  routes:[
    {
      path:'/projet/loging',
      component:require('./components/pages/loging.vue').default,
      name:'page1',
      meta : {
        guest: true
      }
    },
    {
      path:'/projet/enregistrement',
      component:require('./components/pages/enregistrement.vue').default,
      name:'page2',
      meta : {
        guest: true
      }
    },
    {
      path:'/projet/categories',
      component:require('./components/pages/themes.vue').default,
      name:'page3',
      meta : {
        requiresAuth: true
      }
     },
     {
       path:'/projet/ajoutcategories',
       component:require('./components/pages/ajoutthemes.vue').default,
       name:'page4',
       meta : {
         requiresAuth: true
       }
     },
     {
       path:'/projet/citations/:id',
       component:require('./components/pages/citations.vue').default,
       name:'page5',
       meta : {
         requiresAuth: true
       }
     },
     {
       path:'/projet/favoris',
       component:require('./components/pages/favoris.vue').default,
       name:'page6',
       meta : {
         requiresAuth: true
       }
     },
     {
       path:'/projet/modifthemes/:id',
       component:require('./components/pages/modifthemes.vue').default,
       name:'page7'
     },
     {
       path:'/projet/ajoutcitNew/:id', //ajout de :id
       component:require('./components/pages/ajoutcitNew.vue').default,
       name:'page8',
       meta : {
         requiresAuth: true
       }
     },
     {
       path:'/projet/modifcit/:idTheme/:idCitation', //ajout de :id
       component:require('./components/pages/modifcit.vue').default,
       name:'page9',
       meta : {
         requiresAuth: true
       }
     },
     {
       path:'/projet/citationAll/:id', //ajout de :id
       component:require('./components/pages/citationAll.vue').default,
       name:'page10',
       meta : {
         requiresAuth: true
       }
     },
     {
       path:'/projet/deconnexion',
       component:require('./components/pages/deconnexion.vue').default,
       name:'page11',
       meta : {
         requiresAuth: true
       }
     },
    {
      path:'*',
      redirect:'/projet/categories'
    }
  ]
}
)

function verifyToken(){
  return axios.post('/verifyToken', {
    token:localStorage.getItem('jwt')
  })
}

router.beforeEach(async(to, from, next) => {
  const tempo = await verifyToken()
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (!tempo.data){
        console.log('on a pas tempo.data')
            next({
                path:'/projet/loging',
                params: { nextUrl: to.fullPath }
            })
        } else {
                console.log('ici1')
                next()
            }
    } else if(to.matched.some(record => record.meta.guest)) {
        console.log('ici2')
        if(!tempo.data){
            console.log('ici3')
            next()
        }
        else{
            console.log('ici4')
            next({ path:'/projet/categories'})
        }
    }else {
        console.log('ici5')
        next()
    }
})

export default router
