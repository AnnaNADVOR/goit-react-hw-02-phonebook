import { BsFillTrash3Fill } from "react-icons/bs";

function ContactItem({ id, name, number, onDeleteContact}) {
    return (
        <li key={id}>
            <p>{name}: <span>{number}</span>
            </p>
            <button onClick={()=> onDeleteContact(id)} type="button">
                <BsFillTrash3Fill />                
            </button>
        </li>
    )
}

export default ContactItem;