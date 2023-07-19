const initialState = {
    videogames: [],
    detail:{},
    genresFilter:[],
    maxminFilter:[],
    recursoExtra:[],
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case 'ALL_VIDEOGAMES':
            return{
                ...state,
                videogames:[...action.payload],
                recursoExtra:[...action.payload],
                genresFilter:[...action.payload],
                maxminFilter:[...action.payload]
            }
        case 'NAME_VIDEOGAMES':
                return{
                    ...state,
                    videogames:[...action.payload],
                    genresFilter:[...action.payload],
                    maxminFilter:[...action.payload],
                }
        case 'ID_DETAIL':
            return{
                ...state,
                detail:{...action.payload}
            }   
        case 'GENDER_FILTER':
            if(action.payload === 'todos'){
                return{
                    ...state,
                    videogames:[...state.recursoExtra],
                    genresFilter:[...state.recursoExtra]
                }
            }
            else{
                return{
                    ...state,
                    videogames:[...state.recursoExtra.filter(el=>el.genres.some(genre=> genre === action.payload))],
                    genresFilter:[...state.recursoExtra.filter(el=>el.genres.some(genre=> genre === action.payload))],
                    maxminFilter:[...state.recursoExtra.filter(el=>el.genres.some(genre=> genre === action.payload))]
                }    
            }
                case 'ORIGIN_FILTER':
            if(action.payload === 'todos'){
                return{
                    ...state,
                    videogames:[...state.genresFilter],
                    maxminFilter:[...state.genresFilter]
                }
            }
            if(action.payload === 'creados'){
                return{
                    ...state,
                    videogames:[...state.genresFilter.filter(el=>typeof(el.id) === typeof('pru3v4') )],
                    maxminFilter:[...state.genresFilter.filter(el=>typeof(el.id) === typeof('pru3v4') )]
                }    
            }
            else{
                return{
                    ...state,
                    videogames:[...state.genresFilter.filter(el=>typeof(el.id) !== typeof('s3edes'))],
                    maxminFilter:[...state.genresFilter.filter(el=>typeof(el.id) !== typeof('s3edes'))]
                }
            }
        case 'ORDER_FILTER':
            if(action.payload === 'normal'){
                return{
                    ...state,
                    videogames:[...state.maxminFilter]
                }
            }
            if(action.payload === 'mayor'){
                return{
                    ...state,
                    videogames:[...state.videogames.sort((a, b)=>{return b.rating - a.rating})]
                }    
            }
            if(action.payload === 'menor'){
                return{
                    ...state,
                    videogames:[...state.videogames.sort((a, b)=>{return a.rating - b.rating})]
                }
            }
            if(action.payload === 'az'){
                return{
                    ...state,
                    videogames:[...state.videogames.sort((a, b)=>{return a.name.localeCompare(b.name)})]
                }
            }
            if(action.payload === 'za'){
                return{
                    ...state,
                    videogames:[...state.videogames.sort((a, b)=>{return b.name.localeCompare(a.name)})]
                }
            }
            break;
        default:
            return{
                ...state
            }
    }
}
export default reducer;