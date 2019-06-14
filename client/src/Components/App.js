import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import Register from './auth/Register';
import Login from './auth/Login';


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
            <Route name="itineraries" exact path="/itineraries/:id" component={Itineraries} />
            {/* <Route name="itineraries" exact path="/itineraries" component={Itineraries} /> */}
            <Route name="login" exact path="/login" component={Login} />

		    <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
