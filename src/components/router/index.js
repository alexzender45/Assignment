import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import Items from '../items';
import MediaCard from '../event'

const AllRoute = () => { 

    return (
      <HashRouter basename="/">
            <Route exact path="/" component={MediaCard} />
            <Route path='/items' component={Items} />
            </HashRouter>
  );
}

export default AllRoute;