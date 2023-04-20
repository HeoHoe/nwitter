import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// #region .env 설정
const path = require('path');
if (process.env.NODE_ENV === 'prod') {
    require('dotenv').config();
}
else {
    require('dotenv').config({ path: path.join(__dirname, '../dev.env') });
}
// #endregion

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



