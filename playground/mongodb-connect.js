// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Somenthing to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Raul',
  //   age: 24,
  //   location: 'Targu Mures'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to create user', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  db.close();
});
