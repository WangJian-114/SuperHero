import { 
    ADD_HERO,
    DELETE_HERO,
    GET_AVERAGE,
    GET_TEAM_STATS
   } from '../../types';



export const TeamReducer = ( state, action) => {
    switch(action.type) {
        case ADD_HERO:
            const alignment = action.payload.biography.alignment;
            if(alignment === 'good'){
                return {
                    ...state,
                    goodHero: [...state.goodHero, action.payload],
                    team: [...state.team, action.payload]
                }    
            }else {
                return {
                    ...state,
                    badHero: [...state.badHero, action.payload],
                    team: [...state.team, action.payload]
                }
            }

        case DELETE_HERO:
            const align = action.payload.biography.alignment;
            if(align === 'good'){
                return {
                    ...state,
                    goodHero: state.goodHero.filter(hero => hero.id !== action.payload.id), 
                    team: state.team.filter(hero => hero.id !== action.payload.id) 
                }    
            }else {
                return {
                    ...state,
                    badHero: state.badHero.filter(hero => hero.id !== action.payload.id),
                    team: state.team.filter(hero => hero.id !== action.payload.id)  
                }
            }

        case GET_AVERAGE:
            return {
                ...state,
                teamHeight:action.payload.avgHeight,
                teamWeight:action.payload.avgWeight
            }
        
        case GET_TEAM_STATS:
            return {
                ...state,
                teamStats: action.payload
            }
    
        default:
            return state;
    }
}