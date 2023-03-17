import {initializeApp} from 'firebase/app';
import {getAuth , signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcSC1skw7cWJOa72K3uv4_WaF8TtGN2gU",
    authDomain: "crwn-clothing-5a408.firebaseapp.com",
    projectId: "crwn-clothing-5a408",
    storageBucket: "crwn-clothing-5a408.appspot.com",
    messagingSenderId: "384044442058",
    appId: "1:384044442058:web:0dea89b770114ef740af33"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
        prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopUp=()=>signInWithPopup(auth,provider);
  
  //get Firestore database
  export const db=getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db,'users',userAuth.uid);

    const userSnapShot= await getDoc(userDocRef);

    //if user data doesn't exist
    if(!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt});
        } catch(error) {
            console.log("Error creating the user",error.message);
        }
    }

    return userDocRef;

  }
