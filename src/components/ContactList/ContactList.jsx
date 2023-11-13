import ContactItem from "components/ContactItem/ContactItem";

function ContactList({ contacts, onDeleteContact}) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) =>
                <ContactItem
                   onDeleteContact={onDeleteContact}
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                />
            )}
        </ul>
    )
}

export default ContactList; 