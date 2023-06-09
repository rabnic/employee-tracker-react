import React  from 'react';

import AddEmployeeForm from './AddEmployeeForm';

const AddEmployee = ({addEmployeeHandler, editEmployee}) => {
    return (
        <section className='add-form-container'>
            <AddEmployeeForm add={addEmployeeHandler} editEmployee={editEmployee} />
        </section>
    )
};

export default AddEmployee;