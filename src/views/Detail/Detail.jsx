import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import style from './Detail.module.css'

const Detail = () => {

    const { id } = useParams();
    const [videoGameId, setVideoGameId] = useState({});
    useEffect(() => {
        axios.get(`/videogames/${id}`)
            .then(result => setVideoGameId(result.data))
    }, [id]);

    return (
        <div >
            <div className={style.comeback}>
                <Link to="/home">Return to home</Link>
            </div>
            <div className={style.container}>

                {videoGameId ? <div className={style.detail} key={videoGameId.id}>
                    <h2 >{videoGameId.name}</h2>
                    <div >
                        <img src={videoGameId.image} alt={videoGameId.image} />
                    </div>
                    <div className={style.row}>
                        <span className={style.column}>
                            <h3>Rating:</h3>
                            <h4>{videoGameId.rating}</h4>
                        </span>
                        <span className={style.column}>
                            <h3 >Genres:</h3>
                            {videoGameId.genres ? videoGameId.genres.map((genre, index) => {
                                return (
                                    <h4 key={index}>{genre}</h4>
                                )
                            }) : " "
                            }
                        </span>
                        <span className={style.column}>
                            <h3 >Released:</h3>
                            <h4 >{videoGameId.released}</h4>

                        </span>
                        <span className={style.column}>
                            <h3 >Platforms:</h3>
                            {videoGameId.platforms ?
                                videoGameId.platforms?.map((plat, index) => {
                                    return (
                                        <h4 key={index}>{plat}</h4>
                                    )
                                }) : " "
                            }

                        </span>
                    </div>
                    <div >
                        <h3 >Decription:</h3>
                        <div className={style.description}>
                            <h4 >
                                {
                                    videoGameId.description?.split("<p>")
                                        .join("\n")
                                        .split("<p>")
                                        .join(" ")
                                        .split("<br />")
                                        .join("\n")
                                }
                            </h4>
                        </div>
                    </div>
                </div> : <Loading />}
            </ div>
        </div>
    )
};

export default Detail;