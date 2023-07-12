const initialState = {
    videogames: [],
    detail:{},
    genres:[]
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case 'ALL_VIDEOGAMES':
            return{
                ...state,
                videogames:[...action.payload]
            }
        case 'NAME_VIDEOGAMES':
            return{
                ...state,
                videogames:[...action.payload]
            }
        case 'ID_DETAIL':
            return{
                ...state,
                detail:{...action.payload}
            }   
        case 'GENRES':
            return{
                ...state,
                genres: [...action.payload]
            }    
        default:
            return{
                ...state
            }
    }
}
export default reducer;