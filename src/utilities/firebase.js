import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatRef = db.ref('chat');
export default firebase;
