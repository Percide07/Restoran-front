// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import Home from './pages/Home';
import AddArticle from './pages/AddArticle';
import ViewArticle from './pages/ViewArticle';
import About from './components/About/About';
import Notification from './components/Notifications/Notification';

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-article" component={AddArticle} />
          <Route path="/article/:id" component={ViewArticle} />
          <Route path="/about" component={About} />
        </Switch>

        <Notification />
      </div>
    </Router>
  );
};

export default App;
