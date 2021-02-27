
// import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyBLNqsaUEEA0__izTvzn268tf9zyexOT2o",
    authDomain: "cloneagram-cb6e9.firebaseapp.com",
    projectId: "cloneagram-cb6e9",
    storageBucket: "cloneagram-cb6e9.appspot.com",
    messagingSenderId: "747122473214",
    appId: "1:747122473214:web:0b8ffec318cc07dbc70daf",
}

const firebase = window.firebase.initializeApp(config)
const { FieldValue } = window.firebase.firestore

// seedDatabase(firebase)

export { firebase, FieldValue }