import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
const Details = () => {
  const { ApiUrl } = useGlobalContext();
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetch(`${ApiUrl}/coins/${id}`);

        const data = await res.json();
        const item = data;
        setDetails([item]);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();

    const interval = setInterval(() => {
      getDetails();
    }, 30000);

    return () => clearInterval(interval);
  }, [id, ApiUrl]);

  return (
    <>
      {details.map((detail) => {
        const { id, name } = detail;
        return (
          <div key={id}>
            <h3>{name} </h3>
          </div>
        );
      })}
    </>
  );
};
export default Details;
