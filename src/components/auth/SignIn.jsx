/* eslint-disable no-unused-vars */
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            // const user = userCredential.user;
            console.log(userCredential)
            // ...
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error)
          });
    }
  return (
    <section className="form___container">
        <form onSubmit={handleFormSubmit}>
            <h1>SignIn</h1>
            <br/>
            <label>Email</label>
            <input type="email" name="email" value={email} placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" value={password} placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Sign In</button>
        </form>
    </section>
  )
}
export default SignIn