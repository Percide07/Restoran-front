// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddArticle from './pages/AddArticle';
import ViewArticle from './pages/ViewArticle';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-article" component={AddArticle} />
        <Route exact path="/view-article/:id" component={ViewArticle} />
        {/* Ajoutez d'autres routes au besoin */}
      </Switch>
    </Router>
  );
};

export default Routes;
