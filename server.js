const express =require("express");
var bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const connection = new Sequelize('porjectDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


//first model:
var books = connection.define('livres', {
    number: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    }
    ,status:{
        type:Sequelize.STRING
    }
  });

  connection.sync()
  



//fait attention a le nom DB
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/api/allbk",(req,res) =>
         {
         books.findAll({
             order:[Sequelize.col('type')]
         }).then((articles)=>{
          res.json(articles)
        });
})
app.post("/api/updatebook/:bookId",(req,res) =>
         {
          const id = parseInt(req.params.bookId, 10);
          const {book}=req.body;
          books.update(
           {status:book.status},
           {where :{id:id}}
          ).then(function(rowsUpdated){
            res.json(rowsUpdated)
          }).catch(function(error){
            res.json(error)
          })
        });






// recuperé



//insertion 


app.listen('3000',()=> {
            console.log('server run on port 3000..');
});