import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/ContactsSlice';
import s from './ContactForm.module.css';

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.items)

    const [name, setName] = useState("");
    const [number, setNumber] = useState("")


    const nameId = nanoid();
    const phoneId = nanoid();

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


    const addContact = ({ name, number }) => {
        const newContact = { id: nanoid(), name, number };
        const checkUser = contacts.find(
            contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

        checkUser
            ? alert(`${name} is already in the contacts`)
            : dispatch(add({ name, number, id: nanoid() }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addContact({name, number});
        reset();
    };

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
            <button className={s.button} type="submit">Add contact</button>
        </form>
    );
};
