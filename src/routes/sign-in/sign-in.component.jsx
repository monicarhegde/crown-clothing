import {signInWithGooglePopUp,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
const SignIn =() => {
    const logGoogleUser = async()=> {
        const {user}=await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h3>Sign-in page</h3>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    )
}
export default SignIn;