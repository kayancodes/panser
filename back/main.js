const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
var cors = require('cors');
const xss = require ('xss')
const https = require ('https');
const fs = require ('fs')
const port=443;       //en local port=8080    //en ligneHTTPS port = 443;      //port http:80 consultation serveur http: redirection vers port 443

//////////////////// a metre en commentaire en local //pour
const privateKey = fs.readFileSync('/etc/letsencrypt/live/yannpensees.fr/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/yannpensees.fr/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/yannpensees.fr/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
///////////////>>> a metre en commentaire en local

const app = express();
app.use('/', express.static(__dirname + '/../front'));



app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: false
}))

app.use(cors({

  origin: 'https://yannpensees.fr',            //en ligne https : //https://yannpensees.fr/  //en local : 'http://localhost:8080',

  credentials: true

  //Pour le mettre sur le web
   // origin: '*',
   // credentials: true //avant false (faire le test)
// }));
}))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());





/// routesTheme declaration et appel
const routesTheme = require('./routesTheme.js'); //declaration
routesTheme(app) //appeler


/// routesCitation declaration et appel
const routesCitation = require('./routesCitation.js'); //declaration
routesCitation(app) //appeler

/// routesLogin declaration et appel
const routesLogin = require('./routesLogin.js'); //declaration
routesLogin(app) //appeler



app.use((req, res, next) => {
  for(const input in req.body){
    console.log(xss(req.body[input], {
      whiteList: [],
      stripIgnoreTag: true
    }))

  }
})



///////////////>>> a metre en commentaire si connexion en local ou en http
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
	console.log('HTTPS Server running on port 443');
});
///////////////>>> a metre en commentaire si connexionen local



///////////>>> Pour connection en local //a metre en commentaire si connexion en http ou https
// app.listen(7070);

/////////////>>> Pour connection en HTTP / a metre en commentaire si connexion en local ou en https
// app.listen(80);
