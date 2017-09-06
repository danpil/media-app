import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../common/Header';
import HomePage from './../components/HomePage';
import MediaGalleryPage from './../containers/MediaGalleryPage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/library" component={MediaGalleryPage} />
      </div>
    );
  }
}

export default App;
