// IMPORTANT!! USE firebase emulators:start to work

const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login, uploadImage } = require('./handlers/users');

// SCREAM ROUTES
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

// USERS ROUTES
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);

exports.api = functions.region('europe-west1').https.onRequest(app);
