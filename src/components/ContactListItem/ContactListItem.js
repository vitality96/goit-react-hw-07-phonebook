import toast from 'react-hot-toast';
import { useEffect } from "react";
import { useDeleteContactMutation } from 'service/contactsAPI';
import s from './ContactListItem.module.css'

export default function ContactListItem({ contact }) {
    const { name, phone, id } = contact;
    const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();


    useEffect(() => {
        if (isSuccess) {
            toast.success(`Contact is successfully deleted!`);
        }
    }, [deleteContact, id, isSuccess])

    const handleClick = (id) => {
        deleteContact(id);
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