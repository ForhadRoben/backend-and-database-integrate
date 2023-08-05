const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.User_Name}:${process.env.User_Pass}@cluster0.1jwqqxu.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);

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

        const coffeeCollection = client.db('coffeeDB').collection('coffees');

        app.get('/coffees', async (req, res) => {
            const result = await coffeeCollection.find().toArray();
            res.send(result)
        })

        app.get('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollection.findOne(query)
            res.send(result)

        })

        app.post('/coffees', async (req, res) => {
            const addCoffee = req.body;
            const result = await coffeeCollection.insertOne(addCoffee)
            res.send(result);
        })

        app.put('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            const modifyCoffee = req.body;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updateCoffee = {
                $set: {
                    name: modifyCoffee.name,
                    chef: modifyCoffee.chef,
                    supplier: modifyCoffee.supplier,
                    taste: modifyCoffee.taste,
                    category: modifyCoffee.category,
                    details: modifyCoffee.details,
                    photo: modifyCoffee.photo
                }

            }
            const result = await coffeeCollection.updateOne(filter, updateCoffee, options)
            res.send(result)
        })

        app.delete('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            // console.log(id);
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollection.deleteOne(query)
            res.send(result)
        })









        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('server is running')

})
app.listen(port, () => {
    console.log(`server is running on port:${port}`);
})