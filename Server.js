  //configure env variables
  require('dotenv').config()
 
 // Import required packages
 const express = require('express')
 const cors = require('cors')
 const PORT = process.env.PORT || 3500
 const { MongoClient, ServerApiVersion } = require('mongodb');

 // Connect DB
 const uri = process.env.DBSTRING;
 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
 const client = new MongoClient(uri, {
   serverApi: {
     version: ServerApiVersion.v1,
     strict: true,
     deprecationErrors: true,
   }
 });
 async function run() {
   try {
     // Connect the client to the server	(optional starting in v4.7)
     await client.connect();
     // Send a ping to confirm a successful connection
     await client.db("admin").command({ ping: 1 });
     console.log("Pinged your deployment. You successfully connected to MongoDB!");
   } finally {
     // Ensures that the client will close when you finish/error
     await client.close();
   }
 }
 run().catch(console.dir);



 // Create Express server
 const app = express();
 // Enable cors and JSON parser
 app.use(cors())
 app.use(express.json())

 //test responses

//  app.put('/', async (req, res) => {
//     //test to check read/write functionality to Mongo DB
//     await client.connect();
//     console.log('successful call')
//     const myDB = client.db('movie-review')
//     const dbCollection = myDB.collection('first collection')
//     const testDoc = {name: req.body['name'], food: req.body['food']}
//     await dbCollection.insertOne(testDoc)
//     const read = dbCollection.find({})
//     for await (const doc of read){
//         console.log(doc)
//     }
//     await client.close();
    
  // })
 // API call to POST review information to db
  app.post('/post-review', async (req, res) => {
    //test to check read/write functionality to Mongo DB
    await client.connect();
    console.log('successful call')
    const myDB = client.db('movie-review')
    const dbCollection = myDB.collection('first collection')
    await dbCollection.insertOne(req.body)
    await client.close();
    
  })

  app.get('/get-reviews', async (req, res) => {
    //test to check read/write functionality to Mongo DB
    await client.connect();
    console.log('successful call')
    const myDB = client.db('movie-review')
    const dbCollection = myDB.collection('first collection')
    const read = dbCollection.find({})
    for await (const doc of read){
        console.log(doc)
    }
    await client.close();
    
  })

 





 // Set listener
 app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
 })


 