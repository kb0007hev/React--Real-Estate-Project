import React, { useState } from "react";
import EmployeeListItem5 from "./EmployeeListItem5";
import data from "../data";
import styles from "../styles/EmployeeList4.module.css"




function EmployeeList4() 
{
      const [employeeData, setEmployeeData] = useState(data);



    return (
      <div>

            {employeeData.map((employee) => (
              <EmployeeListItem5 employee={employee} key={employee.name} className={styles.employee} />
            ))}
      </div>
    );
        
}

// export default EmployeeList4;


z