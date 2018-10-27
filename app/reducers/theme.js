import { CHANGE_PRIMARY_COLOR } from "../actions/theme";

const initState = {
    primaryColor: '#4f6D7A',
}

export default (state = initState,action) => {
    switch(action.type){
        case CHANGE_PRIMARY_COLOR:
            return{
                ...state,
                primaryColor: action.color
            }
        default:
            return state;
    }
}

