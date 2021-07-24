import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import heroContext from '../../context/hero/heroContext';
import  HeroCard  from '../heroes/HeroCard';
import Alert from '../util/Alert';
import Spinner from '../../components/util/Spinner';


const Search = () => {

    const [loading, setLoading] =useState(false);
    const HeroContext = useContext(heroContext);

    const { searchHero, heroesFiltered } = HeroContext;

    // Formulario y Validacion con Formik y Yup
    const formik = useFormik({
        initialValues: {
            searchText:''
        },

        validationSchema: Yup.object({
            searchText : Yup.string().required('No puede ir vacio'),
        }),

        onSubmit: async (data)=> {
            setLoading(true);
            await searchHero(data.searchText);
            setLoading(false);
        }
    });
    
    return (
        <div className="container">
            <h1>Buscar Heroes</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Busqueda</h4>
                    <hr />
                    <form  onSubmit={formik.handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control mb-3"
                            name="searchText"
                            autoComplete="off"
                            value={formik.values.searchText}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        { formik.touched.searchText && formik.errors.searchText ? <Alert message={formik.errors.searchText}/>: null }

                        <button
                            type="submit"
                            className="btn mt-3 btn-block btn-outline-primary"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>


                <div className="col-7">

                    <h4> Resultados </h4>
                    <hr />
    
                    <div className="alert alert-info">
                        Buscar un heroe
                    </div>
                    

                    { 
                        (!heroesFiltered) 
                            && 
                            <div className="alert alert-danger">
                                No hay ningun hereo que coincida con la busqueda
                            </div>
                    }
                    { loading? <Spinner /> : null }
                    {
                        heroesFiltered?.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                hero = {hero}
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}

export default Search;