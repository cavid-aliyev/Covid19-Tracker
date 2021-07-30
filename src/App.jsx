import React from "react";

import { Cards, CountryPicker, Chart } from "./Components";
import { fetchData } from "./api/";

import image from "./assets/images/image.png";

const App = () => {
  // state = {
  //   data: {},
  //   country: '',
  // }

  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState("");



  //bug
  React.useEffect(async () => {
    const data = await fetchData();

    setData({ data });
  });

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);

    setCountry({ data, country: country });
  };

  return (
    <div className="container">
      <img className="image" src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
