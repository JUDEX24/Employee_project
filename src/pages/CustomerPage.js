import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const CustomerPage = () => {
  let { id } = useParams();
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:8000/api/customers/" + id;

    fetch(url)
      .then((response) => {
        if (response.status === 500) {
          navigate("/not_exist");
        }
        return response.json();
      })
      .then((data) => {
        // passing a customer object
        setCustomer(data.customer);
      })
      .catch(() => {
        console.log("We got nothing from the server");
      });
  }, []);

  return (
    <>
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
      <Link to="/customers">Back to customers</Link>
    </>
  );
};

export default CustomerPage;
