import React from 'react'

class Activities extends React.Component {
    state = {
      clicked: false
    }
    constructor(props) {
        super(props);
        // this.handleButtonClick = this.handleButtonClick.bind(this);
        // this.state.clicked = props.clicked;
      }
      
     render() {
      // let activities = this.props.activities
      console.log(this.props)
      return (
        this.props.activities.map((oneActivity, index) => {
          return (
            <div key={index}>
              
              <img src={oneActivity.pic} />
            
            </div>
            );
        })
      )
      

    }
}
export default Activities;
