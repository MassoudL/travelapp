import React from 'react'
import { Button} from 'react-bootstrap';
class Activities extends React.Component {
    state = {
      clicked: false
    }
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state.clicked = props.clicked;
      }
      handleButtonClick() {
          console.log(this.state);
        this.state.clicked = !this.state.clicked;
      }
     render() {
     let { clicked } = this.state;

      return (
        <div>
        <Button
          variant="primary"
          onClick={this.handleButtonClick}>
          { clicked ? 'Close' : 'ViewAll' }
        </Button>
        </div>
        );

    }
}
export default Activities;
