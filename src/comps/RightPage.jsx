import React from 'react'; 
import API from "./API"
import "../index.css"

function RightPage(props) {
    
    return (

            <div className="RightPage_rightPage"> 

                    <h1> {props.name}  </h1>

                    <div className="HomePage1-lowerBox">
                        <p>{props.statement1}</p>
                
                        <p>{props.statement2}</p>
                        <div>{props.statement3}</div>
                        <br/>
                        <br/>
                        <div>{props.statement4}</div>
                        <div>{props.statement5}</div>
                    </div>

                    <API /> 
                
            </div> 

    
    )
};

export default RightPage; 


