import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "urql";
import {
  Country,
  useCountriesQuery,
  useCountryQuery,
} from "./generated/graphql";

function App() {
  const [countries, setC] = useState<Country[]>([]);
  const [currentCode, setCode] = useState("");
  const [res] = useCountriesQuery();

  const [countryQueryRes] = useCountryQuery({
    variables: {
      code: currentCode,
    },
  });

  useEffect(() => {
    if (res.data?.countries) {
      // setC(res.data?.countries);
    }
  }, [res]);

  return (
    <div className="App">
      <h1>hello world</h1>
      {res.data?.countries.map((c) => (
        <p key={c.code} onClick={() => setCode(c.code)}>
          {c.name}:{c.code}
          {c.emoji}
        </p>
      ))}
      <div>
        {countryQueryRes.data?.country?.phone}
        {}
      </div>
    </div>
  );
}

export default App;
