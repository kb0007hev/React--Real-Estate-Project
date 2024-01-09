import React from "react";
// import LeftHeader2 from "./LeftHeader2";
// import SearchBar3 from "./SearchBar3";
// import EmployeeList4 from "./EmployeeList4"
// import EmployeePage7 from "./RealEstateList"
// import EmployeeHeader6 from "./EmployeeHeader6"
import styles from "../styles/HomePage1.module.css";
import "../index.css";


function HomePage1(props) {
  
return (
      <div className="HomePage1_leftpage" > 
            <h1 className="HomePage1_words HomePage1_title " >{props.title}  </h1>
            <h2>{props.quote1}</h2>
            <h2 className="HomePage1_words">{props.kevin1}</h2>
            <h2 >{props.quote2}</h2>
            <h2>{props.kevin2}</h2>
            <div className="image-container"> {props.img} </div>
            <h3>{props.quote3}</h3>
            <div className="HomePage1-lowerBox"></div>

            <form className="HomePage1_form">

                  <lable for="zip"> ZIP CODE </lable>
                  <input id="zip" name="zip" type="text" />

                  <lable>RADIUS</lable>
                  <input id="input" name="name" type="text" />
                  
                  <button type="submit" />
            </form>
                
       </div>
            
      
  );       
}

export default HomePage1;