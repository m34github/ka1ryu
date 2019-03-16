const functions = require('firebase-functions');
const config = require('config');
const express = require('express');
const firebaseInitializer = require('./firebaseInitializer');

const admin = firebaseInitializer.admin;
const db = firebaseInitializer.db;
const postsRef = db.collection('land');

const app = express();

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
const authenticate = async (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    res.status(401).send('Unauthorized');
    return;
  }
  const idToken = req.headers.authorization.split('Bearer ')[1];
  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (e) {
    res.status(401).send('Unauthorized');
  }
};

// app.use(authenticate);

const options = config.function;

app.post('/land/domain', async (req, res) => {
  console.log(`userregister method. api version:${config.appVersion}`);

  const geodata = req.body.geodata;
  console.log(geodata);

  const contensUrl = 'https://firebasestorage.googleapis.com/v0/b/ka1ryu.appspot.com/o/ramen.gltf?alt=media&token=a657b683-5b6c-44c3-81c5-2b2651324e10'
  res.status(200).send(contensUrl);
});

module.exports = functions.runWith(options).region('asia-northeast1').https.onRequest(app);
