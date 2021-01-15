// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
       return console.log('Unable to connec to database')
    }

    const db = client.db(databaseName) 

    // READ ----------------
    // db.collection('users').findOne({_id: new ObjectID("60016e59049b5e1e681f76f6")},(error,user) =>  {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age:25}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age:25}).count((error, count) => {
    //     console.log(count)
    // })


    // db.collection('task').findOne({_id: new ObjectID("6001685857972d3da445ecd1")}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('task').find({ completed : true }).toArray( (error, task) => {
    //     console.log(task)
    // })



    // CREATE--------------

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Owm',
    //         age: 25
    //     },
    //     {
    //         name: 'Henry',
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('task').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Read a book',
    //         completed: false
    //     }
    //     ,
    //     {
    //         description: 'Wash the dishes',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })

})