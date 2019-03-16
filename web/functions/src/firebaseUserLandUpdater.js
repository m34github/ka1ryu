const functions = require('firebase-functions');
const config = require('config');
const firebaseInitializer = require('./firebaseInitializer');
const FieldValue = require('firebase-admin').firestore.FieldValue;

const db = firebaseInitializer.db;
const userRef = db.collection('User');

const options = config.function;

console.log(options.appVersion)

module.exports = functions.runWith(options).region('asia-northeast1').firestore
  .document('land/{landId}')
  .onWrite(async (change) => {
    if (change.before.data() === undefined) {
      const userId = await change.after.data().uid;
      await userRef.doc(userId).update({
        domains: FieldValue.arrayUnion(change.after.id),
      });
    } else {
      const userId = await change.before.data().uid;
      await userRef.doc(userId).update({
        domains: FieldValue.arrayRemove(change.before.id),
      });
    }
  });