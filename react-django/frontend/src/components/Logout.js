import React from 'react'
import { useState } from 'react'
import { auth } from "../fire-config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'



const Logout = () => {
    const logMeOut = (event) => {
        signOut(auth)
    }
    


  return (
    <button onClick={logMeOut}> Sign Out</button>

    )
}

export default Logout