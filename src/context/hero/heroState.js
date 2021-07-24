import React,{useReducer} from 'react';
import Swal from 'sweetalert2';

import HeroContext from './heroContext';
import {HeroReducer} from './heroReducer';

import axiosClient from '../../config/axios';

import { 
    SEARCH_HEROES,
    GET_HERO
   } from '../../types';



const HeroState = props => {

    const initialState = {
        hero:null,
        heroesFiltered:[],
        loading:false
    }

    const [state, dispatch] = useReducer(HeroReducer, initialState);

    // Buscar heroe
    const searchHero = async hero => {
        try {
            const res = await axiosClient.get(`search/${hero}`);
            // console.log(res.data);
            dispatch({
                type: SEARCH_HEROES,
                payload:res.data.results
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error',
            });   
        }
    }

    // Obtener un heroe con su id
    const getHeroById = async heroId => {
        try {
            state.loading = true;
            // console.log(heroId);
            const res = await axiosClient.get(`${heroId}`);
            // console.log(res.data);
            dispatch({
                type: GET_HERO,
                payload:res.data
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error',
            });   
        }
    }

    return(
        <HeroContext.Provider
            value={{
                hero: state.hero,
                myTeam: state.myTeam,
                heroesFiltered: state.heroesFiltered,
                loading: state.loading,
                searchHero,
                getHeroById
            }}
        >
            {props.children}
        </HeroContext.Provider>
    )
}
export default HeroState;