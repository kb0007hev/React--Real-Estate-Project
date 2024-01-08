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
            
            
            
       </div>
            
      
  );       
}

export default HomePage1;