import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios"
import {getCities} from '../actions/citiesActions'
import { Link } from "react-router-dom"


class Cities extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         citiesComponent : []
      }
    }
    
    componentDidMount() {
this.props.getCities()

    }


  render() {
    console.log(this.props)
    //const cities = this.state.citiesComponent
    const cities = this.props.cities
    return (
		<div >
	{cities && cities.map(city => {
        return(
            <div key={city.cityName}>
                <Link to={"/itineraries/" + city._id}><h2>{city.cityName}</h2></Link>
            </div>
            
        )
    })}
		</div>
    )
  }
}

const mapStateToProps = (state) => {
   
    return ({
        cities: state.citiesObj.cities,
        //loading: state.citiesObj.loading
    })
}

export default connect(mapStateToProps, {getCities})(Cities);