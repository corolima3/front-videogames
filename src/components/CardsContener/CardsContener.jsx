import style from "./CardsContener.module.css";
import Card from "../Card/Card";
//import { useSelector } from "react-redux";

const CardsContener = (props) => {
  const { pageItems } = props;

  return (
    <div className={style.cardsContaner} >

      {pageItems.map((videogames) => {
        return <Card
          key={videogames.id}
          id={videogames.id}
          name={videogames.name.toUpperCase()}
          image={videogames.image}
          released={videogames.released}
          rating={videogames.rating}
          genres={videogames.genres}
          created={videogames.created}
        />
      })}
    </div>
  )
}


export default CardsContener;