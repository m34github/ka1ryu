const functions = require('firebase-functions');
const config = require('config');
const firebaseInitializer = require('./firebaseInitializer');
const FieldValue = require('firebase-admin').firestore.FieldValue;

const db = firebaseInitializer.db;

const options = config.function;

console.log(options.appVersion)

module.exports = functions.runWith(options).region('asia-northeast1').auth.user().onCreate((user) => {
  const { uid } = user;
  const displayName = user.displayName || 'Anonymous';
  const email = user.email || '';
  const photoURL = user.photoURL

  return db.collection('User').doc(uid).set({
    name: displayName,
    picture: photoURL,
    email: email,
    nation: '',
    job: '',
    comment: '',
    domains: [],
    sex: ''
  })
    .then(() => {
      console.log('Success'); // eslint-disable-line no-console
    })
    .catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });
});