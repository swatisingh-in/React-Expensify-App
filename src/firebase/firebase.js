import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// },(e) => {
//   console.log("failed in fetching data: ", e);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     })
//
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'December Rent',
//   amount: 1400,
//   createdAt: 1000
// });


// database.ref('notes/-L-R-EXUN5hlA2n2qRQg').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React python'
// });

// const firebaseNotes = {
//   notes: {
//     kjakjks: {
//       title: 'First Note',
//       body: 'This is my note'
//     },
//     jkjKJSA: {
//       title: 'Another Note',
//       body: 'This is my second note'
//     }
//   }
// };
//
// const notes = [
//   {
//     id: '12',
//     title: 'First Note',
//     body: 'This is my note'
//   },
//   {
//     id: '8329hi',
//     title: 'Another Note',
//     body: 'This is my second note'
//   }
// ]
//
// database.ref('notes').set(notes);



// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val.name, "is a", val.job.title, "at", val.job.company + "." );
// }, (e) => {
//   console.log('Error with data fetching', e);
// });
//
// setTimeout(() => {
//   database.ref().update({
//     'job/title': 'Software Developer',
//     'job/company': 'Amazon'
//   });
// }, 2000);


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log("Error with data fetching", e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(28);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// Fetching data (this is one time)
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });



// database.ref().set({
//   name: 'Swati Singh',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Amsterdam',
//     country: 'The Netherlands'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('This failed: ', e);
// });
//
// //Update the database
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });



//Remove data from database

// database.ref('isSingle').set(null);

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('isSingle is removed from the database');
//   }).catch((e) => {
//     console.log('Some error occured in removing data: ', e);
//   });




// database.ref('age').set(27);
// database.ref('location/city').set("New Delhi");
//
// database.ref('attributes').set({
//     height: 180,
//     weight: 67
// }).then(() => {
//   console.log('attributes are saved');
// }).catch((e) => {
//   console.log('There is an error: ', e);
// });
