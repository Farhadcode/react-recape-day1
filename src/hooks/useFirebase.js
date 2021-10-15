import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth()
    const singInUserinGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            });
    }



    //observe user state chaange


    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
            }
            else {
                setUser({})
            }

        });
        return () => unsubscribed;

    }, []);


    const logOut = () => {

        signOut(auth)
            .then(() => {

            });
    }
    return {
        user,
        logOut,
        singInUserinGoogle,

    }
}

export default useFirebase;
