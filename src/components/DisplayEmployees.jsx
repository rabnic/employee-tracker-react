import React, { useState } from 'react';

import EmployeeCard from './EmployeeCard';

const DisplayEmployees = ({employees, delEmployee, toEdit}) => {
    console.log('Display emps--- ', employees)
    return (
        <section>
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} employee={{employee}} delEmployee={delEmployee} toEdit={toEdit}/>
                })
            }
            
        </section>
    )
}

export default DisplayEmployees;
