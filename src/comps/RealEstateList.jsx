import React from 'react';
import styles from "../styles/RealEstateList.module.css"

function RealEstateList({name}) {
    
    return (

                <div className={styles.RealEstateList_rightPage}> 
                <h1> {name}  </h1>
                
                </div> 

    
    )
};

export default RealEstateList; 


