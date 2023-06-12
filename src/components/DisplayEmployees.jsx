import { useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';

const DisplayEmployees = ({ employees, delEmployee, setCurrentEmployeeEdit }) => {
    // console.log('Display emps--- ', employees)

    // let employeesLocal = [...employees];

    const [searchQuery, setSearchQuery] = useState('');
    const [employeesLocal, setEmployeesLocal] = useState([...employees])

    const handleInputChange = (e) => {
        let sanitized = e.target.value.trim();
        setSearchQuery(sanitized);
    }

    useEffect(() => {
        setEmployeesLocal([...employees]);
    }, [employees])

    const filterByID = () => {
        if (document.getElementById('search-input').value !== '') {
            console.log('in search')
            setEmployeesLocal(employees.filter(employee => {
                console.log(employee, ' == ', searchQuery)
                return employee.id.includes(searchQuery)
            }));
        } else {
            setEmployeesLocal([...employees])
        }
    }

    return (
        <section className='display-container'>
            <h2>Display Employees</h2>
            {
                employees.length > 0 &&
                <div className='search-container'>
                    <input type="text" id='search-input' required placeholder='search by id number' onChange={handleInputChange} />
                    <button onClick={filterByID} id='search-btn'>Search</button>
                </div>
            }
            {
                employeesLocal.map(employee => {
                    return <EmployeeCard key={employee.key} employee={{ employee }} delEmployee={delEmployee} setCurrentEmployeeEdit={setCurrentEmployeeEdit} />
                })
            }

        </section>
    )
}

export default DisplayEmployees;
