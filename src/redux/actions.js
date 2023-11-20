import axios from "axios";
export const ALL_VIDEOGAMES="ALL_VIDEOGAMES ";
export const BY_ID_VIDEOGAMES="BY_ID_VIDEOGAMES";
export const BY_NAME_VIDEOGAMES="BY_NAME_VIDEOGAMES";
export const ALL_GENRES="ALL_GENRES";
export const CREATE_GAME='CREATE_GAME';
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_ALP = "ORDER_BY_ALP";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_DDBB = "FILTER_BY_DDBB";
export const RETURN_VIDEOGAMES = "RETURN_VIDEOGAMES";
export const DELETE_STATE= "DELETE_STATE";


export const getAllVideogames=()=>{
    return async (dispatch) => {
        try {
            const getAll = await axios.get("/videogames");
           
            return dispatch({ type:ALL_VIDEOGAMES, payload: getAll.data });
            
        } catch (error) { console.log(error.message) }
    }
}

export const getAllGenres=()=>{
    return async (dispatch) => {
        try {
            const getGenres = await axios.get("/genres");
            console.log(getGenres.data)
            return dispatch({ type:ALL_GENRES, payload: getGenres.data });
            
        } catch (error) { console.log(error.message) }
    }
}
export const createVideogame = (userData) =>{
    return async (dispatch) => {
        try {
            const newCreate = await axios.post("/videogames", userData);
            console.log(userData)
            return dispatch({ type:CREATE_GAME, payload: newCreate.data });
            
        } catch (error) { console.log(error.message) }
    }
}
export const orderByRate = (rate) => dispatch => {
    return dispatch({type: ORDER_BY_RATING, payload: rate});
};

export const orderByAlp = (alp) => dispatch => {
    return dispatch({type:ORDER_BY_ALP, payload: alp});
};

export const filterByGenre = (genre) => dispatch => {
    try {
        return dispatch({type: FILTER_BY_GENRE, payload: genre})
    } catch (error) {console.log(error.message) }
};

export const filterDbGames = (value) => dispatch => {
    return dispatch({type: FILTER_BY_DDBB, payload: value });
};

export const getByName = (name) => {
    return async function (dispatch) {
        try {
            const Api = await axios.get(`/videogames?name=${name}`);
                dispatch({ type: BY_NAME_VIDEOGAMES, payload: Api.data });
        } catch (error) {
            dispatch({ type: BY_NAME_VIDEOGAMES, payload: [] });
            }
        }; 
    };
    
    export const returnVideogames = (access) => dispatch => {
        try {
            return dispatch({type: RETURN_VIDEOGAMES, payload: access})
        } catch (error) { console.log(error.message) }
    };
    export const deleteState = (value) => dispatch => {
        try {
            return dispatch({type: DELETE_STATE, payload: value})
        } catch (error) { console.log(error.message) }
    };
    