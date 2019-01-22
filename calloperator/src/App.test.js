import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme';
import {Operator1,Operator2} from './utils/operator'
import App,{matchArray,filterCost} from './App';

describe('<Operator/>',()=>{
 
  it('checks length of operator1', () => {
   var op1=Operator1();
   expect(op1.length).toBeGreaterThan(0);
  });
  it('checks length of operator2', () => {
    var op2=Operator2();
    expect(op2.length).toBeGreaterThan(0);
   });
})


describe('<App/>',()=>{
  it('checks App component',()=>{
    const appDiv=shallow(<App/>);
    expect(appDiv.find('div').length).toBeGreaterThan(0);
  });

  it('checks function matchArray component',()=>{
    var output=matchArray('468',[{'prefix':468,'cost':1.1}])
    console.log('output:',output)
    expect(output.length).toBeGreaterThan(0);
  });
  it('checks function filterCost component',()=>{
    var output=filterCost([{'prefix':468,'cost':1.1}],'4686776')
    console.log('output:',output)
    expect(output.length).toBeGreaterThan(0);
  });
  
})


