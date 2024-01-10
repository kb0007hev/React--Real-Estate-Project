import React from "react";
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

        

</div>
            
      
  );       
}

export default HomePage1;