import { useState } from "react"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);


  return (
    <div className="bg-black px-6 py-4 h-[100vh]">

        <div className="logo">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" className="w-32" />
        </div>

        <form className="text-white w-full flex flex-col gap-4 my-4 text-sm">
            <h2 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            {!isSignInForm && <input type="text" name="name" placeholder="Full name" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>}
            <input type="email" name="email" placeholder="Email address" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>
            <input type="password" name="password" placeholder="Enter password" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>
            <button type="submit" className="bg-red-700 font-bold p-4  w-full rounded-md">Sign In</button>
            <p>Forgot password ?</p>
        </form>

        {isSignInForm 
        ? 
        <p className="text-white my-4">New to Netflix? <span className="font-bold cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>Sign up now.</span></p>
        : 
        <p className="text-white my-4">Already registered? <span className="font-bold cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>Sign in now.</span></p>}
        
    </div>
  )
}

export default Login