import { Link } from "react-router-dom";

const NotExist = () => {
  return (
    <>
      <h1>Data does not exist</h1>
      <Link to="/customers">Go back</Link>
    </>
  );
};

export default NotExist;
