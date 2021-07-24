import React,{useReducer} from 'react';
import Swal from 'sweetalert2';
import TeamContext from './teamContext';
import {TeamReducer} from './teamReducer';
import { average, teamStats, sortList } from '../../helpers/average'; 

import { 
    ADD_HERO,
    DELETE_HERO,
    GET_AVERAGE,
    GET_TEAM_STATS
   } from '../../types';


const TeamState = props => {

    const initialState = {
        goodHero:[],
        badHero:[],
        team:[],
        teamHeight: 0,
        teamWeight: 0,
        teamStats:[]
    }

    const [state, dispatch] = useReducer(TeamReducer, initialState);

    // Agrega un heroe a tu equipo
    const addHero = async hero => {
        // console.log(hero)
        try {
            const exist = state.team.some( h => h.id === hero.id);
            if(exist){
                Swal.fire(
                    'No se puede agregar',
                    `El hereo ${hero.name} ya esta en tu equipo!`,
                    'error'
                )
                return
            }
            if(hero.biography.alignment === 'good'){
                // console.log(state.goodHero.length);
                if(state.goodHero.length === 3){
                    Swal.fire(
                        'No se puede agregar',
                        `Ya tenes 3 ${hero.biography.alignment} heroes`,
                        'error'
                    )
                    return;
                }
            }else {
                if(state.badHero.length === 3){
                    Swal.fire(
                        'No se puede agregar',
                        `Ya tenes 3 ${hero.biography.alignment} heroes`,
                        'error'
                    )
                    return;
                }
            }
            dispatch({
                type: ADD_HERO,
                payload:hero
            });
            Swal.fire(
                'Agregado!',
                'Se sumo un nuevo heroe a tu equipo!',
                'success'
            )
        } catch (error) {
            console.log(error);   
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error',
            });   
        }
    }

    // Elimina a un héroe de tu equipo
    const deleteHero = async hero => {
        try {
            Swal.fire({
                title: 'Estas seguro?',
                text: "Una vez eliminando no se puede recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminalo!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Eliminado!',
                    'El heroe fue eliminado.',
                    'success'
                  )
                  dispatch({
                    type: DELETE_HERO,
                    payload: hero
                  });
                }
              })

        } catch (error) {
            console.log(error);   
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error',
            });   
        }
    }

    // Obtener promedio del equipo
    const getTeamAverage = () => {
        const { avgHeight, avgWeight } = average(state.team);
        dispatch({
            type: GET_AVERAGE,
            payload:{
                avgHeight,
                avgWeight
            }
        })
    }

    // Obtener estadisticas del equipo
    const getTeamStats = () => {
        if(state.team.length === 0) return;
        const result = teamStats(state.team);
        const teamPowerStats = sortList(result);
        const listTeamStats = Object.entries(teamPowerStats);
        // console.log('Lista no ordenada:',result);
        // console.log(orderedList);
        dispatch({
            type: GET_TEAM_STATS,
            payload: listTeamStats
        });
    }




    return(
        <TeamContext.Provider
            value={{
                goodHero: state.goodHero,
                badHero: state.badHero,
                team: state.team,
                teamHeight: state.teamHeight,
                teamStats: state.teamStats,
                teamWeight: state.teamWeight,
                addHero,
                deleteHero,
                getTeamAverage,
                getTeamStats
            }}
        >
            {props.children}
        </TeamContext.Provider>
    )
}
export default TeamState;