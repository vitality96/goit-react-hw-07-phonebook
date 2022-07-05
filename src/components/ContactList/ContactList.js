import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/ContactsSlice';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );


    return (
        <ul className={s.list}>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    {name}: {number}
                    <button className={s.button} type="button" onClick={() => dispatch(remove(id))}>
                        Delete
                    </button>
                </ContactListItem>
            ))}
        </ul>
    );
};


export default ContactList;