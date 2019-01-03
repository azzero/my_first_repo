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
app.post("/api/addbook/",(req,res) =>
         {
          const {book}=req.body;
          
          books.create(
           book
          )
          .then(function(rowInsered){
            res.json(rowInsered)
          }).catch(function(error){
            res.json(error)
          })
});
app.delete("/api/deletebook/:id",(req,res)=>{
  const bookId=parseInt(req.params.id, 10);
  books.destroy({
    where:{
      id:bookId
    }
  }).then(function(response){
     res.json(response)
  }).catch(function(error){
    res.json(error)
  })

})
//statistic counter
app.get("/api/statistic",(req,res)=>{
  let counter ={'kobad':[],'yellow':'0','lafla7a':'0','koclosed':0}
  books.count({ group: 'type' ,attributes: ['type']}
    ).then(c => {
    counter.kobad=c
    console.log('order :',c)
    res.json(c)
  })
  books.count(  { where: {'type': 'القبض','status': 'مغلق'} }).then(c => {
    counter.koclosed=c
  })
  books.count(  { where: {'type': 'أصفر'} }).then(c => {
    counter.yellow=c
  })  
  books.count(  { where: {'type': 'قباض'} }).then(c => {
    counter.lafla7a=c
  })
  
})





// recuperé



//insertion 


app.listen('3000',()=> {
            console.log('server run on port 3000..');
});