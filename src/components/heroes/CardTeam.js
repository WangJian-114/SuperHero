import React, { useContext } from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import teamContext from '../../context/team/teamContext';
import ProgressBar from '../util/ProgressBar'; 

const CardTeam = ({hero}) => {
    const { image, name, biography, powerstats } = hero;
    const listPowerStats = Object.entries(powerstats);
    // console.log(powerstats);
    // console.log(listPowerStats);
    const TeamContext = useContext(teamContext);
    const { deleteHero } = TeamContext;

    const removeHero = () =>{
        deleteHero(hero);
    }

    return (
        <>
            <div className={`card three-column ${biography.alignment} mb-4`}>
                <div className={`${biography.alignment}`}>
                    <div className="">
                        <img src={image.url} className="card-img" alt='imagen hero'/>
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title">  {name}  </h5>
                            <p className="card-text">  {biography.alignment}</p>
                            {
                                listPowerStats?.length !== 0 
                                    ?
                                    (
                                      listPowerStats.map((stats,index) =>
                                        <ProgressBar 
                                            key={index}
                                            property={stats[0]}
                                            width={stats[1]}
                                        />
                                      )
                                    )
                                    : null
                            }
                            <div className="mt-3 d-flex justify-content-between">
                                <button
                                    className="btn btn-danger"
                                    onClick={removeHero}
                                >Eliminar</button>
                                <Link 
                                    to={`/hero/${hero.id}`}
                                    className="btn btn-info"
                                >
                                    Más...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default CardTeam;
