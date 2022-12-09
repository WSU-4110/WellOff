/* eslint-disable prettier/prettier */
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyB3BIt4eL5WvzJDY0-qllYPNmzJYnp-WzA',
    authDomain: 'well-off-3a7ff.firebaseapp.com',
    projectId: 'well-off-3a7ff',
    storageBucket: 'well-off-3a7ff.appspot.com',
    messagingSenderId: '489542922824',
    appId: '1:489542922824:web:294ac6e79076e82d2d9e7d',
    measurementId: 'G-G2BN1SFS8N',
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default {app};
export {db};
