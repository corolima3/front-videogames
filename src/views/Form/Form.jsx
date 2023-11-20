import { useState, useEffect } from "react";
import style from './Form.module.css';
import { useSelector, useDispatch } from "react-redux"
import validate from './validate';
import { createVideogame, getAllGenres } from '../../redux/actions.js';

const Form = () => {

  const { allGenres } = useSelector((state) => state)

  //console.log()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch])

  const [errors, setErrors] = useState({
    name: '',
    image: '',
    description: '',
    platforms: [],
    released: '',
    rating: "",
    genre: "",
  });

  const platformsApi = ["PC", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360",
    "Nintendo Switch", "Nintendo 3DS", "iOS", "Android", "macOS"]
  const [userData, setUserData] = useState({
    name: '',
    image: '',
    description: '',
    platforms: [],
    released: '',
    genre: "",
    rating: "",
  })

  const handlerInput = (event) => {
    setUserData({
      ...userData, [event.target.name]: event.target.value
    });
    setErrors(validate({ ...userData, [event.target.name]: event.target.value }));

  };
  function handlerGenres(e) {
    setUserData({
      ...userData, genre: e.target.value

    });
    setErrors(validate({ ...userData, genre: e.target.value }));
  }
  function handlerPlatforms(e) {
    setUserData({
      ...userData, platforms: [e.target.value]

    });
    setErrors(validate({ ...userData, platforms: [...userData.platforms, e.target.value] }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userData))


    setTimeout(() => { // espera un poco antes de verificar los errores
      if (Object.values(errors).length > 0) {
        return alert("Please verify that all fields are filled in correctly");
      } else {
        dispatch(createVideogame(userData));
        alert("Game Created!");
        window.location.reload();
      }
    }, 100)

  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h2 className={style.h2}>Crea tu Videogame</h2>
        <label> Nombre:
          <input type="text" value={userData.name} onChange={handlerInput} name={"name"} placeholder={"..."} className={style.input} />
        </label>
        {errors.name && <p>{errors.name}</p>}
        <label> Imagen:
          <input type="text" value={userData.image} onChange={handlerInput} name={"image"} placeholder={"..."} className={style.input} />
        </label>
        {errors.image && <p>{errors.image}</p>}
        <label> Descripción:
          <textarea value={userData.description} onChange={handlerInput} name={"description"} placeholder={"Escribe al menos 15 caracteres..."} className={style.input} />
        </label>
        {errors.description && <p>{errors.description}</p>}
        <label> Plataformas: </label>
        <select name='platforms' onChange={handlerPlatforms} className={style.input}>
          <option >...</option>
          {platformsApi.map((plat, i) => { return (<option key={i} value={plat}>{plat}</option>) })}
        </select>
        {errors.platforms && <p>{errors.platforms}</p>}

        <label> Fecha de lanzamiento:
          <input type="date" value={userData.released} onChange={handlerInput} name={"released"} placeholder={"Elige fecha..."} className={style.input} />
        </label>
        {errors.released && <p>{errors.released}</p>}

        <label> Rating:
          <input type="text" value={userData.rating} onChange={handlerInput} name={"rating"} placeholder={"..."} />
        </label>
        {errors.rating && <p>{errors.rating}</p>}
        <label>Géneros: </label>
        <select name='genre' onChange={handlerGenres}>
          <option value="genre">...</option>
          {allGenres?.map((genre, i) => { return (<option key={i} value={genre.name}>{genre.name}</option>) })}
        </select>
        {errors.genre && <p>{errors.genre}</p>}
        <button type="submit">NEW VIDEOGAME</button>
      </form>
    </div>
  )
};

export default Form;