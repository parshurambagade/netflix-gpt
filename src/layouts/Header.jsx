import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchPage } from "../redux/gptSlice";
import languages, { languageText } from "../utils/languages";
import { changeLanguage } from "../redux/configSlice";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
  const user = useSelector((state) => state.user);
  const showGptSearchPage = useSelector((state) => state.gpt.showGptSearchPage);
  const lang = useSelector((state) => state.config.lang);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const notify = () => toast.error('Sign in required!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/");
        // ...
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
      })
      .catch((error) => console.error(error));
  };

  const handleSignInClick = () => {
    navigate('/login');
  }
  const handleHomeClick = () => {
    navigate('/');
  }

  const handleGptSearchClick = () => {
    if(user){
      dispatch(toggleGptSearchPage());
    }else{
      notify()
    }
  };

  const handleSelectChanged = (e) => {
    dispatch(changeLanguage(e.target.value));
    // dispatch(changeLanguage({
    //   identifier: e.target.value,
    //   name: e.target.i}));
  };
  return (
    <div className="z-50 relative  logo w-full px-2 py-2 md:py-4  lg:px-20 h-max flex justify-between  bg-gradient-to-b from-black text-white ">
      <img
        src={NETFLIX_LOGO}
        alt="netflix logo"
        className="w-28 lg:w-44 lg:h-12 "
      />
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
onClick={() => navigate('/login')}
/>
   
         {/* RIGHT SIDE CONTAIER */}
        <div className="flex gap-3 pr-3 lg:pr-0 items-center ">

          {/* SWITCH LANGUAGE  */}
          <select
            className="bg-gray-700 px-1 py-2 lg:p-2 cursor-pointer text-xs lg:text-base"
            onChange={handleSelectChanged}
            value={lang}
          >
            {languages.map((language) => (
              <option key={language.name} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
          
          {/* GPT SEARCH BUTTON  */}
          {location.pathname!=="/login" && 
          
          <div
            className="bg-[#1A7F64] py-2 px-2 lg:px-4 cursor-pointer hover:bg-opacity-90 text-xs lg:text-base text-white rounded-lg mx-2 lg:mx-4 "
            onClick={handleGptSearchClick}
          >
            {showGptSearchPage
              ? <p>{languageText?.headerText[lang]?.home}</p>
              : <p className="flex items-center gap-1 lg:gap-2"><span>{languageText?.headerText[lang]?.gptSearch}</span> <span><FiSearch /></span></p> }
              
          </div>
}
          {/* USER  */}
          <div className="flex  gap-2 items-center">
            {user ? <div className="flex  gap-2 items-center">
              <img src={user?.photoURL} className="w-7 lg:w-8 h-7 lg:h-8 " alt="profile pic" />
            <p
              onClick={handleSignOutClick}
              className=" cursor-pointer text-xl lg:text-2xl"
            >
              <FiLogOut />
              {/* {languageText?.headerText[lang]?.signOut} */}
            </p>
            </div>
            : location.pathname==="/login" 
            ? <div className="py-2 px-2 lg:px-4 cursor-pointer hover:bg-opacity-90 text-xs lg:text-base text-white rounded-lg bg-red-700" onClick={handleHomeClick}>{languageText?.headerText[lang]?.home}</div>
            : <div className="py-2 px-2 lg:px-4 cursor-pointer hover:bg-opacity-90 text-xs lg:text-base text-white rounded-lg bg-red-700" onClick={handleSignInClick}>{languageText?.headerText[lang]?.signIn}</div>
          }
            
          </div>
        </div>
  


    </div>
  );
};

export default Header;
