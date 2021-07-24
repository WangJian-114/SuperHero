import React, {useContext} from 'react';
import { Redirect, Route} from 'react-router-dom';

import authContext from '../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
    
    const AuthContext = useContext(authContext);
    const { authenticated } = AuthContext;

    return ( 
        <Route { ...props } render={ props =>!authenticated
            ? (
                <Redirect to="/login" />
                )

            : (
                <Component { ...props} />
            )} />
    );
}
 
export default PrivateRoute;
