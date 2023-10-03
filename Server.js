  //configure env variables
  require('dotenv').config()
 
 // Import required packages
 const express = require('express')
 const cors = require('cors')
 const PORT = process.env.PORT || 3000


 // Create Express server
 const app = express();

 // Enable cors and JSON parser
 app.use(cors())
 app.use(express.json())

 //test responses

 app.put('/', (req, res) => {
    console.log(req.body)
  })

  console.log(process.env.TEST)

 // Set listener
 app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
 })


 