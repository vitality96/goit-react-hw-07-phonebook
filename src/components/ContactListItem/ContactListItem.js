import toast from 'react-hot-toast';
import { useDeleteContactMutation } from 'service/contactsAPI';
import s from './ContactListItem.module.css'

export default function ContactListItem({ contact }) {
    const { name, phone, id } = contact;
    const [deleteContact, { isLoading }] = useDeleteContactMutation();

    const handleClick = (id, name) => {
        deleteContact(id);
        toast.success(`Contact ${name} is successfully deleted!`, {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
    };

    return (
        <>
            <p className={s.text}>{name}: {phone}</p>
            <button
                className={s.button}
                type='button'
                onClick={() => handleClick(id, name)}
                disabled={isLoading}
            >
                { isLoading ? 'Wait...' : 'Delete' }
            </button>
        </>
    );
}