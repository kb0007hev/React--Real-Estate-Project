import React from "react"; 
import styles from "../styles/EmployeeListItem5.module.css"




function EmployeeListItem5(props) {
 
  return (
      <div className={styles.employeeListItems}>
        <img className={styles.img} src={props.employee.headshot} />
        <div className={styles.name}> {props.employee.name}</div>
        <div className={styles.title}> {props.employee.title}</div>
       </div>
  
  );
}

// export default EmployeeListItem5; 