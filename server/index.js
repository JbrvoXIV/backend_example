const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;
const server = 'https://localhost:';
const moviesRouter = require('./routes/movies.route.js');
const MONGO_URI = "mongodb+srv://JayXIV:JayTrain2800!@cluster0.ezozgz7.mongodb.net/sample_mflix?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection.on('error', () => console.log('Connection failed to establish with database'));
mongoose.connection.once('open', () => console.log('Connection with database established'));

app.use(express.json());
app.use(cors());
app.use('/movies', moviesRouter);

app.listen(PORT, () => console.log(`Running server on ${server}${PORT}`));