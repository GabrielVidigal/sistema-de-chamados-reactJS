

import { initializeApp } from "firebase/app"
import { getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
import { getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCj4mPGQkDiiLyYvag1kqmbOcCoY5NojX4",
  authDomain: "parideal-c1bc7.firebaseapp.com",
  projectId: "parideal-c1bc7",
  storageBucket: "parideal-c1bc7.appspot.com",
  messagingSenderId: "528877459536",
  appId: "1:528877459536:web:0b12e6cf58be9d7d2e9955"
};

  const firebasApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebasApp)
  const db = getFirestore(firebasApp)
  const storage = getStorage(firebasApp)

  export { auth, db, storage }