import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO } from "../utils/constants";
import { changeLanguage } from "../redux/configSlice";
import languages, { languageText } from "../utils/languages";
import WHAT2WATCH_LOGO from "../assets/what2watch-logo.png";
import {
  FiLogOut,
  FiSearch,
  FiMenu,
  FiHome,
  FiX,
  FiUser,
} from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.config.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        if (location.pathname === "/login") {
          navigate("/");
        }
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate, location]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-40 relative w-full px-4 py-3 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={WHAT2WATCH_LOGO}
            alt="What2Watch Logo"
            className="w-24 md:w-32"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <label htmlFor="language" className="sr-only">
            Choose Language
          </label>
          <select
            id="language"
            className="bg-gray-700 px-2 py-2 rounded text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={handleLanguageChange}
            value={lang}
          >
            {languages.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
          <NavItems
            user={user}
            lang={lang}
            handleSignOut={handleSignOut}
            handleLanguageChange={handleLanguageChange}
          />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-2 py-2 bg-black">
          <NavItems
            user={user}
            lang={lang}
            handleSignOut={handleSignOut}
            handleLanguageChange={handleLanguageChange}
            isMobile
          />
        </nav>
      )}
    </header>
  );
};

const NavItems = ({
  user,
  lang,
  handleSignOut,
  handleLanguageChange,
  isMobile,
}) => {
  const buttonClass = isMobile
    ? "flex items-center w-full text-left py-2 px-4 hover:bg-gray-800 transition duration-300"
    : "flex items-center px-4 py-2 text-sm rounded-md border border-gray-600 hover:bg-gray-700 transition duration-300";

  return (
    <div className="flex flex-col md:flex-row items-start md:gap-4">
      <Link
        to="/"
        className={`${buttonClass} md:bg-green-700 md:hover:bg-green-800`}
      >
        <FiHome className="mr-2 text-base" />
        <p>{languageText.headerText[lang].home}</p>
      </Link>
      <Link
        to="/gpt"
        className={`${buttonClass} md:bg-purple-600 md:hover:bg-purple-700 `}
      >
        <FiSearch className="mr-2 text-base " />
        {languageText.headerText[lang].gptSearch}
      </Link>
      {user ? (
        <button
          onClick={handleSignOut}
          className={`${buttonClass} md:bg-gray-600 md:hover:bg-gray-700 flex`}
        >
          <FiLogOut className="mr-2 text-base" />
          {languageText.headerText[lang].logout}
        </button>
      ) : (
        <Link to="/login" className={`${buttonClass}`}>
          <FiUser className="mr-2" />
          {languageText.headerText[lang].signIn}
        </Link>
      )}
    </div>
  );
};

export default Header;
