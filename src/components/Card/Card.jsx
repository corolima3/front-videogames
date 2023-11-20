import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = (props) => {
    const { id, name, image, genres, rating } = props;

    return (

        <Link style={{ textDecoration: 'none' }} to={`/detail/${id}`}>
            <div className={style.cardContainer} >
                <span className={style.fontFamily}>{name}</span>
                <img src={image} alt={name} className={style.imagen} />
                <span>{rating}</span>

                {genres.map((genre, index) => (
                    <span key={index}>{genre}</span>
                ))}

            </div>
        </Link>
    )
};

export default Card;