import React, { Component } from 'react';
import {Grid, Cell,Card,CardTitle,CardText} from 'react-mdl';
import '../App.css';


class CallDetails extends Component {
    render() {
      console.log(this.props);
        return (
            <Grid style={{'display':this.props.display}}>
            <Cell col={1} offset={3}>
            <Card  shadow={0} >
              <CardTitle className='cardStyler' style={{color:'white'}}><h3>Call Details</h3></CardTitle>
              <CardText className='cardStyler' style={{color:'white'}}>
                Calling number:{this.props.number}<hr/>
                Best Rate as per Operator 1:{this.props.operator1Cost!=''?'$'+this.props.operator1Cost:'NA'}<hr/>
                Best Rate as per Operator 2:{this.props.operator2Cost!=''?'$'+this.props.operator2Cost:'NA'}<hr/>
                Best Rate Available:{(this.props.operator1Cost===''&& this.props.operator2Cost==='')?
                'Service not available':
                (this.props.operator1Cost===''||(this.props.operator1Cost>this.props.operator2Cost))?
                '$'+this.props.operator2Cost:'$'+this.props.operator1Cost}
              </CardText>
            </Card>
            </Cell>
          </Grid>
        );
    }
}

export default CallDetails;