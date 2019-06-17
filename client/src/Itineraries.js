import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios"
import {getItineraries, getItinerariesById} from './actions/itinerariesActions'
import Activities from './Components/Activities'
import { Button, Carousel} from 'react-bootstrap';

class Itineraries extends Component {
    // constructor(props) {
    //   super(props)

      state = {
         itinerariesComponent : [],
         clicked: false
      }
    // }

    componentDidMount() {
      //this.props.getItineraries()
this.props.getItinerariesById(this.props.match.params.id)

    }

    handleButtonClick = () => {
      // console.log(this.state);
      this.setState({clicked: !this.state.clicked})
  }



  render() {
    console.log(this.props)
    console.log(this.props.match.params.id)
    let { clicked } = this.state;
    console.log(this.state)
    //const cities = this.state.citiesComponent
    const itineraries = this.props.itineraries
    return (
		<div>

	{itineraries && itineraries.map(itinerary => {
        return(
            <div className='itinerariesContainer' key={itinerary._id}>
                <h2>{itinerary.title}</h2>
                <p>{itinerary.cityName}, {itinerary.hashtag}, {itinerary.rating}, {itinerary.Price}</p>
              {/* <img src={itinerary.activities.pic} className='picContainer'/> */}
              <Button
                variant="primary"
                onClick={this.handleButtonClick}>
                { clicked ? 'Close' : 'ViewAll' }
            </Button>
                
                  <Carousel>{/* {
                    clicked && <Activities activities={itinerary.activities}></Activities>
                  }                 */
                  
                  itineraries.activities && itineraries.activities.map((oneActivity, index) => {
                        return (
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                      </Carousel.Item>)})}
                </Carousel>
                
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
