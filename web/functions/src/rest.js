const functions = require('firebase-functions');
const config = require('config');
const express = require('express');
const firebaseInitializer = require('./firebaseInitializer');

const admin = firebaseInitializer.admin;
const db = firebaseInitializer.db;
const landRef = db.collection('land');

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
  const geodata = req.body;
  console.log(geodata);
  const w3w = 'vaital.offers.ladders'
  let contentData;
  const contentsRef = await landRef.doc(w3w)
  await contentsRef.get().then((doc) => {
    if (doc.exists) {
      console.log('Document data:', doc.data());
      contentData = doc.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }).catch((error) => {
    console.log('Error getting document:', error);
    res.status(500).send(error);
  });
  const contensUrl = contentData.contents
  console.log(contensUrl)
  res.status(200).send(contensUrl);
});

module.exports = functions.runWith(options).region('asia-northeast1').https.onRequest(app);
