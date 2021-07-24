import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import teamContext from '../../context/team/teamContext';
import './hero.css';
import ProgressBar from '../util/ProgressBar'; 

const HeroCard = ({hero}) => {
    const { image, name, biography, powerstats } = hero;
    const listPowerStats = Object.entries(powerstats);
    const TeamContext = useContext(teamContext);
    const { addHero } = TeamContext;

    const addNewHero = () =>{
        addHero(hero);
    }

    return (
        <div className="card ms-3 animate__animated animate__fadeIn mb-3" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={image.url} className="card-img" alt='imagen hero' />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">  {name}  </h5>
                        <p className="card-text">  {biography.alignment} hero </p>
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
                        <div className="mb-2 mt-3">
                            <button
                                className="btn btn-primary"
                                onClick={addNewHero}
                            >Agregar Equipo</button>
                        </div>

                        <Link 
                            to={`/hero/${hero.id}`}
                            className="btn btn-info mt-3"
                        >
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default HeroCard;
