import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import  authContext  from '../../context/auth/authContext';


const Navbar = () => {
    const history = useHistory();

    const AuthContext = useContext(authContext);
    const { logOut } = AuthContext;

    const handleLogout = () => {
        history.replace('/login');
        logOut();
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"
                    >
                        Equipo
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Busqueda
                    </NavLink>
                </div>              
            </div>


            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button 
                        className="nav-item nav-link btn btn-outline-info"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;