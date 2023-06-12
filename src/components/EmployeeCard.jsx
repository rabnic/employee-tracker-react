import idIcon from '../icons/id.png';
import jobIcon from '../icons/chair1.png';
import phoneIcon from '../icons/phone.png';
import emailIcon from '../icons/email.png';
import deleteIcon from '../icons/bin.png';
import editIcon from '../icons/edit.png';
import defaultUserImage from '../icons/photographer.png';

const populateFormForEdit = ({employee}) => {
    Array.from(document.querySelectorAll('#add-form input')).forEach(elem => {
        const attr = elem.attributes.name.value;
        elem.value = employee[attr];
    })
    document.getElementById('addBtn').style.display = 'none';
    document.getElementById('editBtn').style.display = 'block';
}

const EmployeeCard = ({employee, delEmployee, setCurrentEmployeeEdit}) => {
    const {name, surname, id, email, position, phone, key, image} = employee.employee;
    return (
        <div className="employee-card">
            <header>
                <h3>{`${name} ${surname}`}</h3>
                <div className="btns-container">
                    <img src={editIcon} alt="" onClick={() => {populateFormForEdit(employee);setCurrentEmployeeEdit(employee.employee.key)}}/>
                    <img src={deleteIcon} alt="" onClick={()=>{delEmployee(key)}}/>
                </div>  
            </header>
            <div className="employee-details">
                <p><img src={idIcon} alt="Id number-"/>{id}</p>
                <p><img src={emailIcon} alt="Email address-"/>{email}</p>
                <p><img src={jobIcon} alt="Job position / Chair-"/>{position}</p>
                <p><img src={phoneIcon} alt="Phone-"/>{phone}</p>
            </div>
            <span>
                <img src={image || defaultUserImage} width='100px' height='100px' alt={`${name} ${surname}  picture_`} className='user-image'/>    
            </span>

        </div>
    )
}

export default EmployeeCard;