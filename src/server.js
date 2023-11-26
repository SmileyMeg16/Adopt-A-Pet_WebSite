const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

const mongoDBURI = 'mongodb+srv://msteeves:<password>@adoptionform.ywyyou3.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB using Mongoose');
});

const mongoClient = new MongoClient(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoClient.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB using the MongoDB driver:', err);
  } else {
    console.log('Connected to MongoDB using the MongoDB driver');
  }
});

const adoptionFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  animalType: String,
  animalName: String,
});

const AdoptionForm = mongoose.model('AdoptionForm', adoptionFormSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); 

app.post('/submit', async (req, res) => {
  const formData = req.body;

  try {
    console.log('Received form data:', formData);

    const adoptionFormDataMongoose = new AdoptionForm(formData);
    await adoptionFormDataMongoose.save();

    console.log('Form data saved to MongoDB using Mongoose:', formData);

    const dbClient = mongoClient.db();
    const collection = dbClient.collection('adoptionForms');
    await collection.insertOne(formData);

    console.log('Form data saved to MongoDB using the MongoDB driver:', formData);

    res.status(200).send('Form data saved successfully');
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).send('Error saving form data');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
