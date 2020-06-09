const mysql=require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     :  process.env.user,
  password :  process.env.password,
  database : 'citatheque',
  port:3306     //port de la bdd mysql en local : 8889:en local et 3306:base de donne en ligne sur serveur VPS     //port de la bdd en ligne , via serveur : 3306
});



connection.connect(); //SERT A ACTIVER LA CONNECTION averifier dans document mysql

module.exports=connection; //Permet de permettre l'exportation de la commande "connection"
