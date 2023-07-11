const initialState = {
    videogames: [],
    detail:{}
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
        default:
            return{
                ...state
            }
    }
}
export default reducer;