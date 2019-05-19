import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
// Redux
import { Provider } from 'react-redux';
import store from '../store';
import Itineraries from '../Itineraries'
import './App.css';
import Cities from './Cities';
import Activities from './Activities';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="cities" exact path="/cities" component={Cities} />
            <Route name="itineraryPage" exact path="/itineraries/:id" component={Itineraries} />
            <Route name="itineraries" exact path="/itineraries" component={Itineraries} />
		    <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
