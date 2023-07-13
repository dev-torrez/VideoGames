const initialState = {
    videogames: [],
    detail:{},
    genresFilter:[],
    maxminFilter:[],
    recursoExtra:[]
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case 'ALL_VIDEOGAMES':
            return{
                ...state,
                videogames:[...action.payload],
                recursoExtra:[...action.payload],
                genresFilter:[...action.payload]
            }
        case 'NAME_VIDEOGAMES':
            return{
                ...state,
                videogames:[...action.payload],
                genresFilter:[...action.payload]
            }
        case 'ID_DETAIL':
            return{
                ...state,
                detail:{...action.payload}
            }   
        case 'GENDER_FILTER':
            return{
                ...state,
                videogames:[...action.payload],
                genresFilter:[...action.payload],
                recursoExtra:[...action.payload]
            }    
        case 'ORIGIN_FILTER':
            if(action.payload === 'todos'){
                return{
                    ...state,
                    videogames:[...state.genresFilter],
                    recursoExtra:[...state.genresFilter]
                }
            }
            if(action.payload === 'creados'){
                return{
                    ...state,
                    videogames:[...state.genresFilter.filter(el=>typeof(el.id) === typeof('pru3v4') )]
                }    
            }
            else{
                return{
                    ...state,
                    videogames:[...state.genresFilter.filter(el=>typeof(el.id) !== typeof('sj44d4'))]
                }
            }
        case 'ORDER_FILTER':
            if(action.payload === 'normal'){
                return{
                    ...state,
                    videogames:[...state.recursoExtra]
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