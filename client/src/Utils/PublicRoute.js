import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !true ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
    />
  )
}

export default PublicRoute;