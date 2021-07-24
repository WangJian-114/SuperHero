import { 
    SEARCH_HEROES,
    GET_HERO
   } from '../../types';



export const HeroReducer = ( state, action) => {
    switch(action.type) {

        case SEARCH_HEROES:
            return {
                ...state,
                heroesFiltered:action.payload
            }

        case GET_HERO:
            return {
                ...state,
                hero:action.payload,
                loading: false
            }
    
        default:
            return state;
    }
}