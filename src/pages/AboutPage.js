import React, { useState, useEffect } from "react";
import "../App.css";
import { useLocation } from "react-router-dom";
//import { Navigation } from '../components/Navigation';
//import { SVG } from '../components/SVG';

export const AboutPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const login = "cmazzochi81";

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  return (
    <div>
      <header class="headerItems flex">
        {/* <SVG/> */}
        <h1 className="heading md:text-3xl md:mt-2 md:flex-row">
          Better Web Metrics
        </h1>
        {/* <Navigation/> */}
      </header>
      {/*end header section*/}

      <section class=" cardsGroup01 flex-row md:flex md:w-3/4 md:m-auto">
        <article class="cardG01 md:m-1 md:w-full ">
          <p id="aboutTxt02" className="aboutText md:h-full text-base">
            A collaboration between two driven individuals.
          </p>
        </article>
      </section>
    </div>
  );
};
export function Error404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>
        The page yer looking for at {location.pathname}, doesn't exist friend...
      </h1>
    </div>
  );
}
