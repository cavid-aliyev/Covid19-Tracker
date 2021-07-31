import React from "react";

import { Carts, CountriesOptions, Chart } from "./Components";
import { fetchData } from "./api/";

import image from "./assets/images/image.png";

const App = () => {
  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState("");

  //bug
  React.useEffect(() => {
    const fetchCovid = async () => {
      const data = await fetchData();
      setData({ data });
    };

    fetchCovid();
  });

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);

    setCountry({ data, country: country });
  };

  return (
    <div className="container">
      <img className="image" src={image} alt="COVID-19" />
      <Carts data={data} />
      <CountriesOptions handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
