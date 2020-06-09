const connection = require('./declarations/connection.js');
const getCitationById = require('./getCitationById.js').getCitationById; // on rajoute le ".getCitationById" car tout ce qui a avant le point est l'object
const mysql=require('mysql');

function routesCitation(app){
  //// GET
     app.get('/citation/:id', (req, res) => {
       getCitationById(response =>{
         res.send(response)
       }, req.params.id, req.session.idUser)
     });

     //// GET CITATION ALL
        app.get('/citationAll', (req, res) => {
          connection.query(`SELECT * FROM citation WHERE fk_id_auteur=${req.session.idUser}`, function (error, results, fields) {
              if (error) throw error;
            res.send(results);
          });
        });


        //// POST SINGLE
        app.post('/citationSingle', (req, res) => {
            connection.query('INSERT INTO theme_citation (fk_id_theme, fk_id_citation) VALUES(?,?)', [req.body.idTheme, req.body.idCitation], function (error2, results2, fields2){
                if (error2) throw error2;
              res.send(results2);
            })
        })



  //// POST UNIQUE
  app.post('/citation', (req, res) => {
    connection.query(`INSERT INTO citation (texte, fk_id_auteur) VALUES(?, ?)`, [req.body.texte,req.session.idUser], function (error, results, fields) {
      if (error) throw error;
      connection.query('INSERT INTO theme_citation (fk_id_theme, fk_id_citation) VALUES(?,?)', [req.body.id, results.insertId], function (error2, results2, fields2){
          if (error2) throw error2;
        res.send(results2);
      })

    })
  })


  //// PUT
  app.put('/citation/:id', (req, res) => {
    connection.query(`UPDATE citation SET texte = ${mysql.escape(req.body.texte)} WHERE id_citation=${mysql.escape(req.params.id)}`, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });


  //// DELETE
  app.delete('/citation/:id', (req, res) => {
    connection.query(`DELETE FROM theme_citation WHERE id_theme_citation=?`, req.params.id, function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });

  app.delete('/citationAll/:id', (req, res) => {
    connection.query(`DELETE FROM theme_citation WHERE fk_id_citation=?`, req.params.id, function(error, results, fields) {
      if (error) throw error;
      connection.query(`DELETE FROM citation WHERE id_citation=?`, req.params.id, function(error2, results2, fields2) {
        if (error2) throw error2;
        res.send(results2);
      })
    });
  });

}


module.exports=routesCitation //pour exporté le fichier "routesCitation"
