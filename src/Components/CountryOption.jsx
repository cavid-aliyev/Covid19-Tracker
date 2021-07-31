import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../api";

const CountriesOptions = ({ handleCountryChange }) => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className="formControl">
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">United States</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountriesOptions;
