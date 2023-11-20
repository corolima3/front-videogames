import style from "./Filter.module.css";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { orderByAlp, orderByRate, filterDbGames, filterByGenre, deleteState } from "../../redux/actions";
import { returnVideogames } from '../../redux/actions'

const Filter = (props) => {
    // eslint-disable-next-line react/prop-types
    const { setData, setCurrentPage } = props; // ver props

    const dispatch = useDispatch();
    const { allGenres, allVideogames } = useSelector(state => state)
    const [optionGenre, setOptionGenre] = useState("All");
    const [optionAlphabet, setOptionAlphabet] = useState("All");
    const [optionRating, setOptionRating] = useState("Normal");
    const [optionOring, setOptionOringn] = useState("Source...");

    const { filterVideogames } = useSelector(state => state)
    console.log(filterVideogames);

    const handleRating = (e) => {
        dispatch(orderByRate(e.target.value))
        setOptionRating(e.target.value)
        setOptionAlphabet("All")
    }

    const handleAlp = (e) => {
        dispatch(orderByAlp(e.target.value))
        setOptionAlphabet(e.target.value)
        setOptionRating("Normal")
    };

    const handleGenres = (e) => {
        // dispatch(returnVideogames(true))
        dispatch(filterByGenre(e.target.value))
        setOptionGenre(e.target.value);
        setCurrentPage(1);
        setOptionAlphabet("All")
        setOptionOringn("Source...")
        setOptionRating("Normal")
    };

    const handleOringn = (e) => {
        //dispatch(returnVideogames(true))
        dispatch(filterDbGames(e.target.value));
        setOptionOringn(e.target.value);
        setCurrentPage(1);
        setOptionGenre("All");
        setOptionAlphabet("All");
        setOptionRating("Normal");
    };

    const handleReset = () => {
        dispatch(deleteState("ok"))
        setData(allVideogames)
        setOptionGenre("All");
        setOptionAlphabet("All")
        setOptionRating("Normal")
        setOptionOringn("Source...")
        dispatch(returnVideogames(false))
    }

    return (
        <div className={style.container}>
            <div className={style.box_filter}>
                <h3>ALPHABET:</h3>
                <select name="order" id="" onChange={handleAlp} value={optionAlphabet}>
                    <option value="All">All</option>
                    <option value="Ascending">Ascendente</option>
                    <option value="Descending">Descendente</option>
                </select>
            </div>
            <div className={style.box_filter}>
                <h3 >RATING:</h3>
                <select name="rating" onChange={handleRating} value={optionRating}>
                    <option value='all'>Normal</option>
                    <option value='alto'>alto</option>
                    <option value='bajo'>bajo</option>
                </select>
            </div>
            <div className={style.box_filter}>
                <h3 >GENRES:</h3>
                <select name="Genres" id="Genres" onChange={handleGenres} value={optionGenre}>
                    <option>All</option>
                    {allGenres?.map((genre, i) => <option key={i} value={genre.name}>{genre.name}</option>)}
                </select>
            </div>
            <div className={style.box_filter} >
                <h3>ORIGEN:</h3>
                <select name="order" id="" onChange={handleOringn} value={optionOring}>
                    <option value="" >Source...</option>
                    <option value="API" >API</option>
                    <option value="DATABASE">DATABASE</option>
                </select>
            </div>
            <div className={style.btn}>
                <button onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
};

export default Filter;