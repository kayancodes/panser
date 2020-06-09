//chai pour comparer les éléments, comparer les tests
//mocha a lancer les tests

const chai = require('chai')
const expect = require('chai').expect
const getCitationById = require('./getCitationById.js').getCitationById; // on rajoute le ".getCitationById" car tout ce qui a avant le point est l'object
const sinon = require('sinon'); //sert a mocker ou stuber la fonction : simuler la fonction pour avoir le controle sur son comportement dans la fonction qu'on veut tester
const connection = require('./declarations/connection.js')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)


const dataToDisplay = [{
  id:1,
  fk_id:1,
  texte:"rest",
}]

//declaration d'une suite de test
describe('getCitationById', ()=>{
  let mock
  //se lance avnat l'execution de chaque test
  beforeEach(()=>{
    //on mock 'mysql' qui est une fonction exterieur
    mock = sinon.mock(connection)
  })
  //se lance apres l'execution de chaque test
  afterEach(()=>{
    //pour restaurer mysql à sa fonctionnalité normale, on retire l'espion de notre methode pour ne pas affecter nos prochains tests
    mock.restore()
  })

//Definition d'un test
  it('test 1', ()=>{
      //verification : premier test : permet de verifier si moca et les dependences marchent
    expect(1).to.equal(1)
  });
  //Déclarer un autre test
  it('test 2', ()=>{
    //permet de voir si la fonctionnalité affiche bien les citation par rapport a son id
    //on effecte une surveillance sur cette variable
    const clbk = sinon.spy()
    const id = 2
    const idUser = 3

    //definir les parametres de la fonction callback
    //1 corespond à l'indice de l'emplacement de la callback
    //null correspond à l'argument 'error' de la callback
    //data correspond à l'argument 'result' de la callback
    //la fonction 'query' sera appelée avec ces parametres qui representent la fonction callback
    mock.expects('query').callsArgWith(1, null, dataToDisplay)
    //on mock "query" pour proteger la fonction quon test qui est "getCitationById" //le "mock" permet de simuler nimporte quelle fonction exterieur ici avec la vrai base de donné  pour ca quon le mock
    getCitationById(clbk, id, idUser)
    //getCitationById c'est la fonction qu'on test et on doit eviter tout effet de bord (intercation avec d'autres element)
    expect(clbk).to.be.calledOnceWith(dataToDisplay)
        // ici on dit que notre object "connection" quon a mocké a une methode query //callsArgWith(1) : que cette methode a comme parametre une fonction quia comme indice 1, ensuite on ajoute les parametre de cettet fonction, a laplace de erreur on met NULL // reslut : tableau dobject resultat de notre requette select
  })
  //declarer un test d'erreur
  it('test 3', ()=>{
    //affcher erreur.
    //on affecte une surveillanc sur cette variable
    const clbk = sinon.spy()
    //definir les parametres de la fonction callback
    //La fonction 'query' sera appelée avec ces parametres
    //new Error() ==> pour declencher un object Error
    const id = 2
    const idUser = 3
    mock.expects('query').callsArgWith(1, new Error(), dataToDisplay) //new Error() pour qeu ca renvoi un erreur
    // pour tester que l'execution d'une fonction declenche une exception
    expect(()=>getCitationById(clbk, id, idUser)).to.throw() //"to.throw"le test va echouer
    expect(clbk).to.not.been.called
        // ici on dit que notre objec "connection" quon a mocké a une methode query //callsArgWith(1) : que cette methode a comme parametre une fonction quia comme indice 1, ensuite on ajoute les parametre de cettet fonction, a laplace de erreur on met NULL // reslut : tableau dobject resultat de notre requette select
  })
})
