const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');

// Food-Blog
// Zvknxh1SJC46wRPw


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Food-Blog:Zvknxh1SJC46wRPw@cluster0.i1uhr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
    //   await client.close();
    }
  }
  run().catch(console.dir);


// async function main() {
//   await mongoose.connect('mongodb+srv://Gym-Genesis:<db_password>@cluster0.i1uhr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

//   app.get('/', (req, res) => {
//     res.send('Start Running Our Server')
//   })
// }
// main().then(() => console.log('monogoes check')).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})