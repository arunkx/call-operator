import React, { Component } from 'react';
import {Layout, Header,Content,Grid, Cell,Textfield,Button,Icon} from 'react-mdl';
import './App.css';
import CallDetails from './components/CallDetails';

var operator=require('./utils/operator');


//function to filter the best call matches
export const filterCost=(operator,val)=>{
  var filtered=[]
  for(var j=5;j>0;j--){
    var val_to_check=val.substr(0,j)
    filtered=matchArray(val_to_check,operator);
    if(filtered.length>0 ){
     break;
    }
 }
 return filtered;
}
//function to match the operator availability on dialled number
export const matchArray=(regexp, operator)=>{
  var filtered = [];
  for (let i = 0; i < operator.length; i++) {
      if(operator[i].prefix.toString()===regexp){
        filtered.push(operator[i])
      }
  }

  return filtered;
}

class App extends Component {
  state={
    number:'',
    operator1Cost:'',
    operator2Cost:'',
    display:'none'
  }



 //function to handle dialled number and get best rate
  handleCall(val){
    var reg = /^\d+$/;
    if(val.match(reg)){
    var op1=operator.Operator1();
    var op2=operator.Operator2();
    var filtered1=filterCost(op1,val)||[];
    var filtered2=filterCost(op2,val)||[];
    var cost1=filtered1.length>0?filtered1.reduce((cost1,element)=>cost1>element.cost?cost1:element.cost):'';
    var cost2=filtered2.length>0?filtered2.reduce((cost2,element)=>cost2>element.cost?cost2:element.cost):''
    this.setState({operator1Cost:cost1===''?'':cost1.cost,
                  operator2Cost:cost2===''?'':cost2.cost,display:'block'})
    }
    else{
      alert('Invalid entry. Please check the input')
    }
  }
 
  render() {
    return (
      <div>
        <Layout fixedHeader>
        <Header  className='header-color' title={<span className='title-styler'><img class="manImg" src="./images/call.jpg"></img>CALL OPERATOR</span>}>
        </Header>
        <Content className='content-color'>
          <Grid>
            <Cell col={4} offset={3}>
              <span ><Icon style={{color:'white',marginTop:'5em'}} name="add" /></span>
                
              <Textfield className='textField'
                onChange={(e)=>{this.setState({number:e.target.value})}}
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Please enter only numeric value"
                label="Enter your number"
                
              />
            </Cell>
            <Cell col={1}>
              <Button raised colored ripple style={{marginTop:'8em',fontFamily: 'Titillium Web'}} 
              onClick={(e)=>{this.handleCall(this.state.number)}}>Call</Button>
            </Cell>
          </Grid>
         <CallDetails number={this.state.number} display={this.state.display} operator1Cost={this.state.operator1Cost} operator2Cost={this.state.operator2Cost}/>
        </Content>
        </Layout>
        
      </div>
    );  
  }
}

export default App;
