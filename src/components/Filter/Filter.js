import { useDispatch, useSelector } from 'react-redux';
import filterSlice, { filterChange } from "redux/filterSlice";
import s from './Filter.module.css';



export default function Filter() {
    const filter = useSelector(state => state.filter.value);
    const dispatch = useDispatch(filterSlice);

    const handleChange = event => dispatch(filterChange(event.target.value));

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

