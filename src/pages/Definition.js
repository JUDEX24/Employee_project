import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";

// return the definition of a given word
const Definition = () => {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //const url = "http://httpstat.us/501";
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
    fetch(url)
      .then((response) => {
        //console.log(response.status);

        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate("/login");
        }

        if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong!!");
        }

        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      })
      .catch((e) => {
        // catch any error in general (not 200 ok)
        console.log(e.message);
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search for another word</Link>
      </>
    );
  }

  if (error === true) {
    return (
      <>
        <p>Something went wrong, try again!</p>
        <Link to="/dictionary">Search for another word</Link>
      </>
    );
  }

  return (
    <>
      {word ? (
        <>
          <h1 className="px-4">
            Here are the definitions of{" "}
            <span className="font-bold">{search}</span>:
          </h1>
          {word.map((meaning) => {
            return (
              <p className="px-4" key={uuidv4()}>
                {meaning.partOfSpeech} - {meaning.definitions[0].definition}
              </p>
            );
          })}

          <div className="mx-4 p-3 bg-slate-400 max-w-[210px] rounded hover:bg-slate-600">
            <Link className="no-underline text-white" to="/dictionary">
              Search for another word
            </Link>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Definition;
