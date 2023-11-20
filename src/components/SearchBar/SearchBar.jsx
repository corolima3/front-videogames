import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName, returnVideogames } from '../../redux/actions';
import style from './SearchBar.module.css'
//import searchImg from '../../assets/search.png'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleClick = (e) => {
        dispatch(returnVideogames(true))
        e.preventDefault()
        if (search.length) {
            dispatch(getByName(search))
            setSearch("")
        }
    }
    return (
        <div>
            <input className={style.input} onChange={handleSearch} value={search} type='search' placeholder="Search Videogame..." />
            <button className={style.button} onClick={handleClick}>SEARCH</button>
        </div>
    )
}

export default SearchBar;