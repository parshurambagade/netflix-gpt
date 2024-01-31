import { useRef, useState } from "react"
import { validateData } from "../utils/validateData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import { NETFLIX_BG, PROFILE_PIC } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const displayName = useRef(null);

    const handleFormSubmit = (e) => {
      e.preventDefault();
    
      const message = validateData(email.current.value, password.current.value);
      message ? setErrorMessage(message) : setErrorMessage(null);
      
      if(message) return;

      if(!isSignInForm) {
        //signup logic 
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              updateProfile(auth.currentUser, {
                displayName: displayName.current.value, photoURL: PROFILE_PIC
              }).then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid, email, displayName, photoURL}));
              })
              .catch((error) => console.log(error));

              
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMsg = error.message;
              setErrorMessage(errorCode + errorMsg);
              // ..
            })
      }else{
        //signin logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              // const {uid,displayName, email, photoURL} = auth.currentUser;
              //   dispatch(addUser({uid, email, displayName, photoURL}));
              //   navigate('/browse')
                // ...
            })
          .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            setErrorMessage(errorCode + errorMsg);
          });
      }
          
           

    }

  return (
    <div className={`bg-black lg:bg-cover lg:bg-center px-6 md:px-8 py-4 md:py-8 min-h-[100vh]`} style={{backgroundImage: `url(${NETFLIX_BG})`}}>

        <Header />

        <form className="text-white w-full md:w-1/2 lg:w-3/12 lg:p-12 lg:rounded-lg lg:bg-black lg:opacity-85 md:mx-auto flex flex-col gap-4 my-4 md:my-12 lg:box-border text-sm">
            <h2 className="font-bold text-3xl lg:my-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            {!isSignInForm && <input type="text" ref={displayName} name="name" placeholder="Full name" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>}
            <input ref={email} type="email" name="email" placeholder="Email address" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>
            <input ref={password} type="password" name="password" placeholder="Enter password" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>
           
            {errorMessage && <p className="text-red-700 my-2 ">{errorMessage}</p>}

            <button type="submit" className="bg-red-700 font-bold p-4  w-full rounded-md" onClick={handleFormSubmit}>{!isSignInForm ? "Sign Up" : "Sign In"}</button>
            <p className="md:text-base md:text-center lg:text-sm">Forgot password ?</p>

            <div className="md:mx-auto md:my-16 lg:my-8 lg:mx-0">
        {isSignInForm 
        ? 
        <p className="text-white">New to Netflix? <span className="font-bold cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>Sign up now.</span></p>
        : 
        <p className="text-white">Already registered? <span className="font-bold cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>Sign in now.</span></p>}
        </div> 
        </form>

        
    </div>
  )
}

export default Login