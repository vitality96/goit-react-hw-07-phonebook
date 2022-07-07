import ContactListItem from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList({contacts}) {
    return (
        <ul className={s.list}>
            {contacts.map(contact =>
            (<li 
                key={contact.id}
                className={s.item}
            >
                <ContactListItem contact={contact} />
            </li>)
            )}
        </ul>
    );
};
