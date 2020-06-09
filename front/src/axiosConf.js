import axios from 'axios'
axios.defaults.baseURL = 'https://yannpensees.fr';  //adresse du back      // axios.defaults.baseURL = 'http://localhost:7070'= en local    //'https://yannpensees.fr' en ligne    axios.defaults.baseURL = 'http://yannpensees.fr'; = en ligne sur serveur vps
axios.defaults.withCredentials = true
export default axios
