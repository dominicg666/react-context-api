import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) => {
        try {
          return isAuthenticated ?
            (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
            );

        } catch (error) {
          localStorage.clear();
          toast.error('Invalid user. Please login as a different user');
          return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />;
        }
      }
      }
    />
  );
};
