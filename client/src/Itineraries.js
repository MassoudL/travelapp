import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios"
import {getItineraries, getItinerariesById} from './actions/itinerariesActions'
import Activities from './Components/Activities'


class Itineraries extends Component {
    constructor(props) {
      super(props)

      this.state = {
         itinerariesComponent : []
      }
    }

    componentDidMount() {
      this.props.getItineraries(this.props.match.params.id)
//this.props.getItinerariesById(this.props.match.params.id)

    }



  render() {
    console.log(this.props)
    console.log(this.props.match.params.id)
    //const cities = this.state.citiesComponent
    const itineraries = this.props.itineraries
    return (
		<div >

	{itineraries && itineraries.map(itinerary => {
        return(
            <div key={itinerary._id}>

                <h2>{itinerary.title}</h2>
                <p>{itinerary.cityName}</p>
                <p>{itinerary.hashtag}</p>
                <p>{itinerary.rating}</p>
                <p>{itinerary.Price}</p>
       {/* add button view all */}
       <Activities clicked={false}/>
            </div>



        )
    })}
		</div>
    )
  }
}

const mapStateToProps = (state) => {

    return ({
        itineraries: state.itinerariesObj.itineraries,
        //loading: state.itinerariesObj.loading
    })
}

export default connect(mapStateToProps, {getItineraries, getItinerariesById})(Itineraries);
