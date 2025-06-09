import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageText } from "../../utils/languages";
import getGptResults from "../../utils/getGptResults";

const GptSearchbar = () => {
  const searchQuery = useRef(null);
  const lang = useSelector((state) => state.config.lang);
  const dispatch = useDispatch();

  const handleSearchClicked = () => {
    getGptResults(searchQuery, dispatch);
  };

  return (
    <div className="bg-black text-white p-2 lg:p-4 w-full lg:w-1/2">
      <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 w-full">
        <input
          type="text"
          name="search"
          ref={searchQuery}
          placeholder={languageText?.gptSearchPageText[lang]?.placeHolder}
          className="w-9/12 lg:w-4/5 px-4 py-2 text-black text-sm lg:text-base"
          autoComplete="off"
        />
        <button
          className="bg-red-800 hover:bg-opacity-90 text-white px-4 py-2 text-sm lg:text-base w-3/12 lg:w-1/5"
          onClick={handleSearchClicked}
          aria-label="Search"
        >
          {languageText?.gptSearchPageText[lang]?.buttonText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
