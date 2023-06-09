import EmployeeCard from './EmployeeCard';

const DisplayEmployees = ({employees, delEmployee, setCurrentEmployeeEdit}) => {
    // console.log('Display emps--- ', employees)
    return (
        <section>
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.key} employee={{employee}} delEmployee={delEmployee} setCurrentEmployeeEdit={setCurrentEmployeeEdit}/>
                })
            }
            
        </section>
    )
}

export default DisplayEmployees;
