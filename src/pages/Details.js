import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinData from "../CoinData";
import { useGlobalContext } from "../Context";
import DetailsChart from "../DetailsChart";
import Loading from "../Loading";
const Details = () => {
  const { ApiUrl } = useGlobalContext();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const currency = "vs_currency=usd";
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
  useEffect(() => {
    const getDetails = async () => {
      try {
        const [day, week, year, detail] = await Promise.all([
          fetch(
            `${ApiUrl}/coins/${id}/market_chart?${currency}&days=1`
          ).then((response) => response.json()),
          fetch(
            `${ApiUrl}/coins/${id}/market_chart?${currency}&days=7`
          ).then((response) => response.json()),
          fetch(
            `${ApiUrl}/coins/${id}/market_chart?${currency}&days=365`
          ).then((response) => response.json()),
          fetch(
            `${ApiUrl}/coins/markets/?${currency}&ids=${id}&price_change_percentage=1h%2C24h%2C7d%2C30d`
          ).then((response) => response.json()),
        ]);
        // console.log(day);

        setDetails({
          day: formatData(day.prices),
          week: formatData(week.prices),
          year: formatData(year.prices),
          detail: detail[0],
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();

    // const interval = setInterval(() => {
    //   getDetails();
    // }, 30000);

    // return () => clearInterval(interval);
  }, [id, ApiUrl]);

  if (isLoading) {
    return (
      <section id="details-page">
        <div className="container-large">
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <>
      <div id="MarketDetail">
        <section className="hero">
          <div className="container">
            <DetailsChart data={details} />
          </div>
        </section>
        <section>
          <CoinData data={details} />
        </section>
      </div>
    </>
  );
};
export default Details;
