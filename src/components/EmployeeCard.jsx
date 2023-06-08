import icon from "./iconUrls";

import idIcon from '../icons/id.png';
import jobIcon from '../icons/chair1.png';
import phoneIcon from '../icons/phone.png';
import emailIcon from '../icons/email.png';
import deleteIcon from '../icons/bin.png';
import editIcon from '../icons/edit.png';

const populateFormForEdit = () => {
    Array.from(document.getElementsByTagName('input')).forEach(elem => {
        elem.value = ""
    })
}

const EmployeeCard = ({employee, delEmployee, toEdit}) => {
    const {name, surname, id, email, position, phone, image} = employee.employee;
    return (
        <div className="employee-card">
            <header>
                <h3>{`${name} ${surname}`}</h3>
                <div className="btns-container">
                    <img src={editIcon} alt="" onClick={() => {toEdit(employee)}}/>
                    <img src={deleteIcon} alt="" onClick={()=>{delEmployee(id)}}/>
                </div>  
            </header>
            <div className="employee-details">
                <p><img src={idIcon} alt="Id number-"/>{id}</p>
                <p><img src={emailIcon} alt="Email address-"/>{email}</p>
                <p><img src={jobIcon} alt="Job position / Chair-"/>{position}</p>
                <p><img src={phoneIcon} alt="Phone-"/>{phone}</p>
            </div>
        </div>
    )
}

export default EmployeeCard;