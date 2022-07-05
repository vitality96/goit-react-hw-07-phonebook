import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../redux/ContactsSlice';
import s from './Filter.module.css';



const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const handleChange = evt => {
        dispatch(filterChange(evt.currentTarget.value));
    };

    return (
        <label className={s.label}>Find contacts by name
            <input
                className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}>
            </input>
        </label>
    );
};

export default Filter;
