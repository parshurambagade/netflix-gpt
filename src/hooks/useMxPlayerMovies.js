import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MX_PLAYER_DATA_API1, MX_PLAYER_DATA_API2, MX_PLAYER_DATA_API3, MX_PLAYER_DATA_API4 } from "../utils/constants";
import { addMxPlayerMovies } from "../redux/moviesSlice";

const useMxPlayerMovies = () => {

    const dispatch = useDispatch();
    const mxPlayerMovies = useSelector(state => state.movies.mxPlayerMovies);

    useEffect(() => {
        !mxPlayerMovies.length && fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const data1 = await fetch(MX_PLAYER_DATA_API1);
        const json1 = await data1.json();
        const data2 = await fetch(MX_PLAYER_DATA_API2);
        const json2 = await data2.json();
        const data3 = await fetch(MX_PLAYER_DATA_API3);
        const json3 = await data3.json();
        const data4 = await fetch(MX_PLAYER_DATA_API4);
        const json4 = await data4.json();

        dispatch(addMxPlayerMovies([...json1.sections, ...json2.sections, ...json3.sections, ...json4.sections]));
    }

}

export default useMxPlayerMovies;