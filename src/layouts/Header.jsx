import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector(state => state.user);
  // console.log(user)
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
  return (

      <div className="z-10 absolute logo w-[95%] px-4 lg:py-4 lg:px-20 h-[7vh] flex justify-between lg:bg-gradient-to-b from-black text-white">
    <img src={NETFLIX_LOGO} alt="netflix logo" className="w-32 lg:w-44 lg:h-12"  />

    {user && <div className="flex gap-2 items-center ">
      <img src={user?.photoURL} className="w-8 h-8 " alt="profile pic" />
      <p onClick={handleSignOutClick} className="cursor-pointer">Sign out</p>
    </div>}
</div>
  )
}

export default Header