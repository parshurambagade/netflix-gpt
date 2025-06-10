import { useCallback, useEffect } from "react";
import { CORS_ORIGIN_PROXY, TMDB_GET_PERSON_DETAILS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPersonDetails } from "../redux/personSlice";

const usePersonDetails = (personId) => {
  const dispatch = useDispatch();

  const fetchPersonDetails = useCallback(async () => {
    try {
      const data = await fetch(
        `${CORS_ORIGIN_PROXY}${encodeURIComponent(
          `${TMDB_GET_PERSON_DETAILS + personId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        )}`
      );
      const json = await data.json();
      dispatch(addPersonDetails(JSON.parse(json.contents)));
    } catch (e) {
      console.error(e);
    }
  },[dispatch, personId]);


  useEffect(() => {
    personId && fetchPersonDetails();
  }, [fetchPersonDetails, personId]);


};

export default usePersonDetails;
