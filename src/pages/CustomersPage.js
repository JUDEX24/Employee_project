import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    console.log("Fetching...");
    fetch("http://localhost:8000/api/customers/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // passing a customer list
        setCustomers(data.customers);
      });
  }, []);

  return (
    <>
      {customers ? (
        <>
          <h1>Here are the customers:</h1>

          {customers.map((customer) => {
            return (
              <Link
                to={"/customers/" + customer.id}
                className="block"
                key={customer.id}
              >
                {customer.name}
              </Link>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default CustomersPage;
