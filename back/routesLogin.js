const connection = require('./declarations/connection.js');
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const mysql = require('mysql')


function routesLogin(app){



//// POST UNIQUE
app.post('/login', (req, res) => {
  connection.query('SELECT password, id_auteur FROM auteur WHERE mail = ?', [req.body.mail], function (error, results, fields) {
    if (error) throw error;
    if (results.length === 0) {
      console.log(req.body.mail)
      res.send({
        status: 'PB',
        message: 'erronné'
      })
    } else {
      const passwordToCompared = results[0].password
      const passwordUser = req.body.password
      const passwordCrypted = cryptoJs.SHA256(passwordUser).toString()
      console.log(passwordCrypted, passwordToCompared)
      if (passwordToCompared === passwordCrypted){
        const idUser = results[0].id_auteur
        req.session.idUser = idUser
        const privatekey = process.env.key
        const token = jwt.sign({ idUser: idUser}, privatekey)
        res.send({
          status: 'OK',
          message: 'vous êtes connecté',
          token: token
        })
      } else {
        res.send({
          status: 'PB',
          message: 'erroné'
        })
      }

    }
  })
});

// ENREGISTREMENT
app.post('/register', (req, res) => {
  connection.query(`SELECT mail FROM auteur WHERE mail=${mysql.escape(req.body.mailAuteur)}`, function (error, results, fields) { //on regare si le mail lexiste deja dans la base de donnée
    if (error) throw error;
    if (results.length === 0){  // on regarde si le tableau est vide, si = 0 alors le mail n'exist pas dans la base de donnée / Si mail pas présent donc auun utilisateur n'a deja utilisé cet identfiant donc c'est bon.
      connection.query(`INSERT INTO auteur (mail, password, pseudonyme) VALUES (${mysql.escape(req.body.mailAuteur)}, ${mysql.escape(cryptoJs.SHA256(req.body.pswdAuteur).toString())}, ${mysql.escape(req.body.pseudoAuteur)})`, (error2, results2) => {
        if(error2) throw error2
        res.send('Le user a été ajouté')
      })
    } else {
      res.send('le mail existe déjà')
    }
  })
})


//  la route qui va permettr@e de verifier le token
app.post('/verifyToken', (req, res) => {
  if (req.body.token){
    try {
      const decoded = jwt.verify(req.body.token, process.env.key)
      const idUser = decoded.idUser
      req.session.idUser = idUser
      res.send(true)
    } catch (err) {
      res.send(false)
    }
  } else {
    res.send(false)
  }
})



// POUR LE BOUTON DECOJNEXION, ON NE VA PAS DANS LA BDD
app.get('/deconnexion', (req, res) => {
  req.session.destroy();
  res.status(200).send('Ok');
})


}

module.exports=routesLogin //pour exporté le fichier "routesTheme"
