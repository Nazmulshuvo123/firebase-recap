import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase/firebase.init";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <>
      <h1>Recap FireBase</h1>
      <button onClick={handleGoogleSignIn}>Login With Google</button>
      {
      user && 
         <div>
          <h2>User: {user.displayName}</h2>
          <h2>User: {user.email}</h2>
          <img src={user.photoURL} />
         </div>
      }
    </>
  );
}

export default App;
