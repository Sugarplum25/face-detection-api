const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'Maria',
        password: '111',
        database: 'smart-brain'
    }
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Connecting successfully');
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) });

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) });

app.put('/image', (req, res) => { image.handleImage(req, res, db )});

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });

app.listen(3000, () => console.log('The port is running on 3000'));