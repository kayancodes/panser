const connection = require('./declarations/connection.js');
const mysql=require('mysql');



function routesTheme(app){
//// GET
  app.get('/theme', (req, res) => {
    console.log(req.session.idUser)
    connection.query('SELECT * FROM theme WHERE fk_id_auteur=?', [req.session.idUser], function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });


  app.get('/theme/:id', (req, res) => {
    console.log(req.session.idUser)
    connection.query(`SELECT title FROM theme WHERE id_theme=${req.params.id} AND fk_id_auteur=${req.session.idUser}`, function (error, results, fields) {
      if (error) throw error;
      console.log(results)
      res.send(results[0].title); //on recupere la proprieté "title" dansl'object "results[0]" //result = renvoi un tableau d'objects dont les propriete sont egal a ce qu'il y a apres le SELECT ici "title"
    });
    // [{title:"top"}]
  });


//// POST UNIQUE
app.post('/theme', (req, res) => {
  console.log(req.session.idUser)
  connection.query('INSERT INTO theme (title, fk_id_auteur) VALUES(?,?)', [req.body.title, req.session.idUser], function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  })
})


//// PUT
app.put('/theme/:id', (req, res) => {
  connection.query(`UPDATE theme SET title = ${mysql.escape(req.body.title)} WHERE id_theme=${mysql.escape(req.params.id)}`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});


//// DELETE
app.delete('/theme/:id', (req, res) => {
  connection.query(`DELETE FROM theme_citation WHERE fk_id_theme=?`, req.params.id, function(error, results, fields) {
    if (error) throw error;
    connection.query(`DELETE FROM theme WHERE id_theme=?`, req.params.id, function(error2, results2, fields2) {
      if (error2) throw error2;
      res.send(results2);
    });
  });
});


}

module.exports=routesTheme //pour exporté le fichier "routesTheme"
