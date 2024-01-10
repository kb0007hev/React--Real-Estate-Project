import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage1 from "./comps/HomePage1";
import RightPage from "./comps/RightPage";
import "./index.css";

function App() {
  const quote1 = "Don't wait to buy real estate, buy real estate and wait. - Will Rogers";
  const kevin1 = "You heard that from Kevin";

  const quote2 = "The best investment on Earth is earth. - Louis Glickman";
  const kevin2 = "You can take that to the bank";

  const img = <img src="/images/SoldHouse.jpg" />;

  const quote3 = "We get them quick, we sell them fast, get it while it’s getting, while they last!"

  const statement1 = "IF YOU ARE A CLIENT LOOKING FOR RESIDENTIAL REAL ESTATE  TO RENT OR PURCHASE IN THE WHOLE STATE OF MICHIGAN"
  const statement2 = " --- WE ARE EXPERTS ---  ---CALL US IF YOU HAVE ANY QUESTIONS ---"
  const statement3 = "IN THE MEAN TIME, FEEL FREE TO USE OUR PROPRIETARY CLIENT PROPERTY SEARCH PROGRAM THAT RETURNS REAL TIME DATA."
  const statement4 = "CLIENT PROPERTY SEARCH "
  const statement5 = "Search and explore a wide range of residential properties, including houses, condos, townhouses and apartments."

  return (
    <div className="AppContainer">
      <HomePage1
        title="Kevin's Real Estate Kingdom"
        quote1={quote1}
        kevin1={kevin1}
        quote2={quote2}
        kevin2={kevin2}
        img={img}
        quote3={quote3}
      />


      <RightPage 
      
      name="Real Estate Search Results" 
      
      statement1={statement1}
      statement2={statement2}
      statement3={statement3}
      statement4={statement4}
      statement5={statement5}
      
      
      />
    </div>
  );
}

export default App;
