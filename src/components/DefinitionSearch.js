import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DefinitionSearch = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <form
        className="flex space-between space-x-2 max-w-[300px]"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/dictionary/" + word);
        }}
      >
        <input
          className="bg-gray-100 appearance-none border-2 border-gray-300 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded py-1 px-2"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default DefinitionSearch;
