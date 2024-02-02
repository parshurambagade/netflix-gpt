import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchPage } from "../redux/gptSlice";
import languages, { languageText } from '../utils/languages';
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const user = useSelector(state => state.user);
  const showGptSearchPage = useSelector(state => state.gpt.showGptSearchPage);
  const lang = useSelector(state => state.config.lang);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid, email, displayName, photoURL}));
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [])
  

  const handleSignOutClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => console.log(error));
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchPage());
  }

  const handleSelectChanged = (e) => {
    dispatch(changeLanguage(e.target.value))
    // dispatch(changeLanguage({
    //   identifier: e.target.value,
    //   name: e.target.i}));
  }
  return (

      <div className="z-20 absolute logo w-full px-4 lg:py-4 lg:px-20 h-[10vh] flex justify-between lg:bg-gradient-to-b from-black text-white">
    <img src={NETFLIX_LOGO} alt="netflix logo" className="w-32 lg:w-44 lg:h-12"  />

    {user && <div className="flex gap-2 items-center ">
      
      <select className="bg-gray-700 p-2 cursor-pointer" onChange={handleSelectChanged} value={lang}>
          
        {languages.map((language) => (<option key={language.name} value={language.identifier}>{language.name}</option>))} 
      </select>
      
      <div className="bg-[#1A7F64] py-2 px-4 cursor-pointer hover:bg-opacity-90 text-white rounded-lg mx-4" onClick={handleGptSearchClick}>{showGptSearchPage ? `${languageText?.headerText[lang]?.home}` : `${languageText?.headerText[lang]?.gptSearch}`}</div>
      <img src={user?.photoURL} className="w-8 h-8 " alt="profile pic" />
      <p onClick={handleSignOutClick} className="cursor-pointer">{languageText?.headerText[lang]?.signOut}</p>
    </div>}
</div>
  )
}

export default Header