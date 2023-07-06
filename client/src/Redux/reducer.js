const initialState = {
    videogames: []
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case 'ALL_VIDEOGAMES':
            return{
                ...state,
                videogames:[...action.payload]
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;