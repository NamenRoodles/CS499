import React from 'react'
import { useState } from 'react'
import { auth } from "../fire-config"
import './sip.css'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const SignInPage = ({setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
  
    const handleSubmit = async (event) =>  {
      event.preventDefault()
      console.log("submit func")
      console.log(isSigningUp)

      if (isSigningUp === true){
        //new account being created
        console.log("Sign Up Mode")
        try {
          const user = await createUserWithEmailAndPassword(
            auth, email, password
          )
          alert(`New user created! ${user}`)
          setUser(user)
        } catch(error){
          if(error.code === "auth/email-already-in-use"){
            alert("Email already taken! Choose another")
          }
          console.log(error.code)
        }
      } else {
        // account login
        console.log("Sign In Mode")
        try {
          const user = await signInWithEmailAndPassword(
            auth, email, password
          )
          setUser(user)
        } catch(error){
          if (error.code === "auth/wrong-password"){
            alert("Invalid credentials")
          }
          else if (error.code === "auth/user-not-found") {
            alert("User Not Found!")
            setEmail("")
          }
          console.log(error.code)
        }
      }
      //setEmail("")
      setPassword("")
    }
  
    return (
      <div>
        <h1>Get Up and Do Something</h1>
        <h2>{isSigningUp ? 'Sign Up' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">
            {isSigningUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>
        <div className='NA'>
          <p>
            {isSigningUp
              ? 'Already have an account?'
              : "Don't have an account yet?"}{' '}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setIsSigningUp(!isSigningUp);
              }}
            >
              {isSigningUp ? 'Sign in' : 'Sign up'}
            </a>
          </p>
        </div>
       
      </div>
    )
}

export default SignInPage