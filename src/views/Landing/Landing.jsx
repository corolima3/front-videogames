
import { Link } from "react-router-dom";
import style from './Landing.module.css';

const Landing = () => {

    return (
        <div className={style.container}>
            <div className={style.background}>
                <span className={style.landing}>
                    <h1>Videogames APP</h1>
                    <Link to="/home" >INGRESAR</Link>
                    <p className={style.p}>By Coro Lima Jose</p>
                </span>
            </div>
        </div>
    )
};

export default Landing;