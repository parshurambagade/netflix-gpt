import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPersonDetails } from "../redux/personSlice";

const usePersonDetails = (personId) => {
  const dispatch = useDispatch();

  const fetchPersonDetails = useCallback(async () => {
    try {
      const data = await fetch(`/api/person-details?personId=${personId}`);
      const json = await data.json();
      dispatch(addPersonDetails(json));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, personId]);

  useEffect(() => {
    personId && fetchPersonDetails();
  }, [fetchPersonDetails, personId]);
};

export default usePersonDetails;
