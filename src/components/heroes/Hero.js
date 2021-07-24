import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import heroContext from '../../context/hero/heroContext';
import Spinner from '../util/Spinner';

const Hero = ({id}) => {

    const HeroContext = useContext(heroContext);
    const { hero, getHeroById, loading } = HeroContext;
    
    useEffect(() =>{
        getHeroById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    if(loading) return <Spinner />;
    if(!hero)return <Spinner />;
    // console.log(hero);
    const { name, image, biography, work, appearance } = hero;

    return (
        <div className="row align-items-md-center align-items-sm-center">
            <div className="col-12 col-sm-5 col-md-4 col-lg-4">
                <img 
                    src={ image.url }
                    alt={ name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-12 col-sm-7 col-md-8 col-lg-8 animate__animated animate__fadeIn">
                <h2 className="text-center"> { name.toUpperCase()  } </h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Nombre completo: </b> { biography['full-name'] } </li>
                    <li className="list-group-item"> <b> Altura: </b> { appearance.height[1] } </li>
                    <li className="list-group-item"> <b> Peso: </b> { appearance.weight[1] } </li>
                    <li className="list-group-item"> <b> Color de ojos: </b> {appearance['eye-color']} </li>
                    <li className="list-group-item"> <b> Color de cabello: </b> { appearance['hair-color'] } </li>
                    <li className="list-group-item"> <b> Alias: </b> { biography.aliases } </li>
                    <li className="list-group-item"> <b>Lugar de trabajo: </b> { work.base } </li>
                </ul>
                <Link
                    to={'/search'}
                    className="btn btn-outline-info mt-5"
                >
                    Volver
                </Link>

            </div>

        </div>
    )
}
 
export default Hero;

