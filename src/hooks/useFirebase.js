import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth()
    const singInUserinGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
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
            setIsLoading(false);

        });
        return () => unsubscribed;

    }, []);


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        logOut,
        isLoading,
        singInUserinGoogle,

    }
}

export default useFirebase;
