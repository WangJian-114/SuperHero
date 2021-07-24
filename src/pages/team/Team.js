import React, { useContext } from 'react';
import CardTeam from '../../components/heroes/CardTeam';
import teamContext from '../../context/team/teamContext';

const Team = () => {

    const TeamContext = useContext(teamContext);
    const { goodHero, badHero } = TeamContext;

    return ( 
        <>
            <h1 className="text-left">Mi Equipo</h1>
            { (goodHero?.length === 0 && badHero?.length === 0)
                ?<h2 className="mt-3">Aun no tenes equipo, buscas heroes y crea tu equipo!</h2>
                :null
            }
            <div className="row justify-content-center">
                <div className="col-12">
                    <h4> INTEGRANTES </h4>
                    <hr />
                    
                    <div className="alert alert-primary">
                        Good Hero
                    </div>
                    <div className="flex">
                            {
                                goodHero?.map(hero => (
                                    <CardTeam 
                                        key={hero.id}
                                        hero={hero}
                                    />
                                ))
                            }
                    </div>
                    <hr />   
                    <div className="alert alert-danger">
                        Bad Hero
                    </div>
                    <div className="flex mb-5">
                            {
                                badHero?.map(hero => (
                                    <CardTeam 
                                        key={hero.id}
                                        hero={hero}
                                    />
                                ))
                            }
                    </div>

                </div>

            </div>
        </>
    );
}
 
export default Team;