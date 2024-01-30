import { useState } from "react"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div className={`bg-black lg:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')] px-6 md:px-8  py-4 md:py-8 min-h-[100vh]`}>

        <div className="logo lg:mx-48  ">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" className="w-32 lg:w-44 lg:bg-gradient-to-b from-black" />
        </div>

        <form className="text-white w-full md:w-1/2 lg:w-3/12 lg:p-12 lg:rounded-lg lg:bg-black lg:opacity-85 md:mx-auto flex flex-col gap-4 my-4 md:my-12 lg:box-border text-sm">
            <h2 className="font-bold text-3xl lg:my-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            {!isSignInForm && <input type="text" name="name" placeholder="Full name" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>}
            <input type="email" name="email" placeholder="Email address" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>
            <input type="password" name="password" placeholder="Enter password" className="w-full bg-gray-800 p-4 border border-gray-500 rounded-md"/>
            <button type="submit" className="bg-red-700 font-bold p-4  w-full rounded-md">Sign In</button>
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