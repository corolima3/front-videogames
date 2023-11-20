import style from "./Error.module.css";
import genero from "../../assets/noGenero.png";

const Errors = () => {
   
    return (
        <div className={style.container}>
            <img  src={genero} alt="error"/>
            <p className={style.text}>NO SE ENCONTRARON DATOS</p>
        </div>
    )
};

export default Errors;