import { useEffect } from "react";
import { useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, []);

    const signInWithGoogle = () => {
        console.log('signin in soon')
    };


    return { user, signInWithGoogle }
};

