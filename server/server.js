




const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const client = new MongoClient('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('DineDiscover');
        const usersCollection = db.collection('users');

        app.post('/signup', async (req, res) => {
            const { name, email, password } = req.body;

            try {
                // Check if the user already exists
                const existingUser = await usersCollection.findOne({ email });
                if (existingUser) {
                    return res.status(409).json({ message: 'User already exists' });
                }

                // Insert the new user into the database
                const newUser = { name, email, password };
                const result = await usersCollection.insertOne(newUser);

                res.status(201).json({ message: 'User signed up successfully', userId: result.insertedId });
            } catch (error) {
                console.error('Error signing up:', error);
                res.status(500).json({ message: 'Error signing up' });
            }
        });


        // Example: Find and log all documents in the 'users' collection
        const cursor = usersCollection.find({});
        const result = await cursor.toArray();
        console.log(result);

        // Define API endpoints here

        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connectToDatabase();
