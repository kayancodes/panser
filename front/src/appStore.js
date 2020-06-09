import Vue from 'vue'
import Vuex from 'vuex'
import axiosConf from './axiosConf.js'


Vue.use(Vuex)

const state = {
  items:[],
  citations:[]  //items = tableau (vide) qui va contenir le nom des themes

}

const getters = {

}

const mutations = {
  remplirItems(state, newItems) {
    state.items=newItems
  },

  remplirCitations(state, newCitations){
    state.citations=newCitations
  }

}

const actions = {
  recupItems(context){
    axiosConf.get('/theme')
    .then(function (response) {
      context.commit('remplirItems', response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  recupCitations(context){
    axiosConf.get('/citation')
    .then(function (response) {
      context.commit('remplirCitations', response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }


}
//then=callback= toute la fonction contenu dans la parenthese apres ".then" (ligne27)
//c'est la fonction qui est activé apres que la axios ait reusit la requet et qu'il a recu une reponse positive du back

//context:peu etre = store

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

export default store
