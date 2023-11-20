
import { ALL_VIDEOGAMES, BY_NAME_VIDEOGAMES, BY_ID_VIDEOGAMES, ALL_GENRES, ORDER_BY_RATING, ORDER_BY_ALP, 
  FILTER_BY_GENRE,FILTER_BY_DDBB, CREATE_GAME, RETURN_VIDEOGAMES, DELETE_STATE} from "./actions";
const initialState = {
  primalVideogames:[],
  allVideogames:[],
  filterVideogames:[],
  byName:[],
  allGenres:[],
  access:false,
  error:false,
}

const reducer=(state=initialState, {type, payload}) =>{
    switch (type) {

        case ALL_VIDEOGAMES:
          // eslint-disable-next-line no-case-declarations
          const primal = [...payload]
          return { ...state, 
         
            primalVideogames:primal,
            allVideogames: payload,
          };
        case BY_ID_VIDEOGAMES:
          return { ...state, allVideogames: payload,
          };
        case BY_NAME_VIDEOGAMES:
          return { ...state, byName: payload};
        case ALL_GENRES:
            return { ...state, allGenres: payload};
        case CREATE_GAME:
          if(payload.status === 200) {
            return { ...state,  errorMsg: {}
                  } 
          } else {
            return { ...state, errorMsg: payload
                  }
          }
        case ORDER_BY_ALP:
          const copy=[...state.primalVideogames]
          const all=[...state.allVideogames]
          const alphabet= payload === "Ascending"? all.sort((a, b) => a.name.localeCompare(b.name) ):
          payload === "Descending"? all.sort((a, b) => b.name.localeCompare(a.name))
           : payload==="Random" ? all.sort((a,b) => 0.5 - Math.random())
           :copy
           return { ...state, allVideogames:alphabet}
        
        case ORDER_BY_RATING:
          
          const ByRating = payload === "alto"
          ? state.allVideogames.sort((a, b) => b.rating - a.rating)
          : payload === "bajo"
          ? state.allVideogames.sort((a,b) => a.rating - b.rating)
          : [...state.primalVideogames];
          return { ...state,
            allVideogames: ByRating } ;
          
        case FILTER_BY_DDBB:
          
        const dbOApi = payload === "DATABASE"?  state.primalVideogames.filter(game => game.created===true)
            : payload === "API"? state.primalVideogames.filter(game => game.created===false)
            : [...state.primalVideogames];
            const error= dbOApi.length;
          return {
                  ...state,
                  allVideogames: dbOApi,
                error: !error ?true: false,

              };
       
        case FILTER_BY_GENRE:
          const filter= payload === "All"?state.primalVideogames: state.primalVideogames.filter(game => game.genres.includes(payload));
          const err= filter.length;
            return{
                ...state, allVideogames:filter,
                error: !err ?true: false,
              }

        case RETURN_VIDEOGAMES:
          return{
            ...state, access:payload
          }
        case DELETE_STATE:
          return{ ...state, 
            filterVideogames:[], 
            byName:[],
            allVideogames:state.primalVideogames,
            error:false,
          }
        default:
            return { ...state };
        }
};
export default reducer;