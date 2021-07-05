import Head from 'next/head'
import { auth, googleAuthProvider } from '../../lib/firebase'

export default function Connexion({ props }) {
  const user = null
  const username = null

  return (
    <main>
      {
        user ? !username ? <UsernameForm/>:<SignOutButton/>:<SignInButton/>
      }
    </main>
  )
}

function SignInButton(){
  const signInWithGoogle = async () => {
      await auth.signInWithPopup(googleAuthProvider)
    } 
  
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Connexion Google
    </button>
  )
}

function SignOutButton(){
  return (
    <button className="btn-google" onClick={() => auth.signOut()}>
      Déconnexion
    </button>
  )
}

function UsernameForm(){

}