import React from 'react'; 
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


            <form class="HomePage1_form">
                <label for="zip">ZIP CODE</label>
                <input id="zip" name="zip" type="text" placeholder="zip" />
                

                <label for="radius">RADIUS</label>
                <input id="radius" name="radius" type="text" placeholder="radius"/>


                <button type="submit">Button</button>
            </form>

                
                </div> 

    
    )
};

export default RightPage; 


