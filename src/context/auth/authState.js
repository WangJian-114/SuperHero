import React,{useReducer} from 'react';
import Swal from 'sweetalert2';
import AuthContext from './authContext';
import { AuthReducer } from './authReducer';

import axiosClient from '../../config/axios';

import { 
    LOGIN_SUCCESSFUL,
    LOGOUT_SUCCESSFUL
   } from '../../types';



const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Cuando el usuario inicia sesión
    const logIn = async data => {
        try {
            initialState.loading = true;
            const res = await axiosClient.post('http://challenge-react.alkemy.org/', data);
            console.log(res);
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload:res.data.token
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bienvenido Super Hero!',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            console.log(error);   
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o Password incorrecto',
            });
        }
    }

    // Cierra la sesion del usuario
    const logOut = () => {
        try {
            dispatch({
                type:LOGOUT_SUCCESSFUL
            })  
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error!',
            })
        }
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                mensaje: state.mensaje,
                loading: state.loading,
                logIn,
                logOut
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;