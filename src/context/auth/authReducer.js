import { 
    LOGIN_SUCCESSFUL,
    LOGOUT_SUCCESSFUL
   } from '../../types';



export const AuthReducer = ( state, action) => {
    switch(action.type) {
        case LOGIN_SUCCESSFUL:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                authenticated: true,
                loading: false
            }

        case LOGOUT_SUCCESSFUL:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                authenticated: false,
                user:null,
                loading: false
        }

        default:
            return state;
    }
}