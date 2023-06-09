import React, { useState } from 'react';

const AddEmployeeForm = ({ add, editEmployee }) => {

    const clearFields = () => {
        Array.from(document.getElementsByTagName('input')).forEach(elem => { elem.value = "" })
    }

    const [employee, setEmployee] = useState(
        {
            "name": "",
            "surname": "",
            "email": "",
            "id": "",
            "position": "",
            "phone": "",
            "image": "",
        }
    )

    const addEmp = (e) => {
        e.preventDefault();
        add(employee);
        clearFields();
    }

    const editEmp = (e) => {
        e.preventDefault();
        editEmployee(employee)
        clearFields();
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value })
    }

    return (
        <form>
            <h3 className='form-title'>Add Employee</h3>
            <label>Name</label>
            <input type='text' name='name' placeholder='John' required onChange={handleInputChange} />
            <label>Surname</label>
            <input type='text' name='surname' placeholder='Doe' required onChange={handleInputChange} />
            <label>ID Number</label>
            <input type='text' name='id' placeholder='0000001234081' required onChange={handleInputChange} />
            <label>Email</label>
            <input type='email' name='email' placeholder='example@gmail.com' required onChange={handleInputChange} />
            <label>Position</label>
            <input type='text' name='position' placeholder='Web Developer' required onChange={handleInputChange} />
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='0831234567' required onChange={handleInputChange} />
            <input hidden id='empKey' name='key' />
            <button type="submit" id="addBtn" onClick={addEmp}>Add</button>
            <button id="editBtn" onClick={editEmp}>Edit</button>
        </form>
    )
};

export default AddEmployeeForm;