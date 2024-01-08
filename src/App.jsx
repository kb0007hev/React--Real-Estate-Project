import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage1 from "./comps/HomePage1";
import RealEstateList from "./comps/RealEstateList";
import "./index.css";

function App() {
  const quote1 =
    "Don't wait to buy real estate, buy real estate and wait. - Will Rogers";
  const kevin1 = "You heard that from Kevin";

  const quote2 = "The best investment on Earth is earth. - Louis Glickman";
  const kevin2 = "You can take that to the bank";
  const img = <img src="/images/SoldHouse.jpg" />;

  console.log(img)

  return (
    <div className="AppContainer">
      <HomePage1
        title="Kevin's Real Estate Kingdom"
        quote1={quote1}
        kevin1={kevin1}
        quote2={quote2}
        kevin2={kevin2}
        img={img}
        
      />
      <RealEstateList name="Real Estate Listings" />
    </div>
  );
}

export default App;
