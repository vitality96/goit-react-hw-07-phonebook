import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { useGetAllContactsQuery, useCreateContactMutation } from "service/contactsAPI";
import s from './ContactForm.module.css';

export default function ContactForm() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("")

    const nameId = nanoid();
    const phoneId = nanoid();

    const { data } = useGetAllContactsQuery();
    const [addContact, { isLoading, isSuccess }] = useCreateContactMutation();
    
    useEffect(() => {
        if (isSuccess) {
            toast.success(`Contact has been successfully added!`)
            reset();
        }
    }, [isSuccess]);

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    };

    const handleChangeNumber = (evt) => {
        setNumber(evt.target.value);
    };

    const reset = () => {
        setName("");
        setNumber("");
    };


    const handleSubmit = event => {
        event.preventDefault();
        if (data?.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            return toast.error(`${name} is already in Contacts List!`);
        }
        addContact({ name, number });
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
                Name{" "}
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    onChange={handleChangeName}
                    id={nameId}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={s.label}>
                Number{" "}
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    onChange={handleChangeNumber}
                    id={phoneId}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            {!isLoading && <button className={s.button} type="submit">Add contact</button>}
        </form>
    );
};
