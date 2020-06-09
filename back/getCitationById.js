const connection = require('./declarations/connection.js');
function getCitationById(clbk, id, idUser){
  //les 3 éléments en parametre : (clbk, id, idUser)

//// GET
     connection.query(`SELECT * FROM citation
       INNER JOIN theme_citation ON citation.id_citation = theme_citation.fk_id_citation
       INNER JOIN theme ON theme_citation.fk_id_theme=theme.id_theme
       WHERE theme.id_theme=${id}
       AND citation.fk_id_auteur=${idUser}`, function (error, results, fields) {
         if (error) throw error;
       clbk (results); //clbk fonction en parametre d'une autre // la fonction de calllback, ici notre 2eme paramaeter soit throw erreur si errreur, si pas d"erreur execute la clbk avec un parametre reislt
     }); // ici on besoin des 3 tables : table user + table theme : pour affiché le theme. dans table thme il y a id de l'auteur. ensuite pour citation il y a id du theme. doncpour rehcercher une citation d'un theme on pourait davoir identfifier l'auteur puis le tehem p
}// les theme son lies a la table auteur. pour avoir les theme il fo avoir id de l'auteur. les citation sont mies au theme. et pour avoir id de la citation il fo aller dans la tabel de jointure. c elle qui permet de lier les citation au theme car en plus ont une relation many to many

module.exports={getCitationById}
