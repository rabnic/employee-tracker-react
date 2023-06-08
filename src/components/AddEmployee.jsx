import React, { useState } from 'react';

import AddEmployeeForm from './AddEmployeeForm';

const AddEmployee = ({addEmployeeHandler}) => {
    return (
        <section className='add-form-container'>
            <AddEmployeeForm add={addEmployeeHandler}/>
        </section>
    )
};

export default AddEmployee;