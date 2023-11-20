
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar.jsx";

const NavBar=()=>{

    return (
        <nav className={style.Nav}>
            <li>
                <ul><Link to="/home">HOME</Link></ul>
                <ul><Link to="/create">NEW VIDEOGAME</Link></ul>
                <ul><SearchBar /></ul>
            </li>
        </nav>
    )

};

export default NavBar;