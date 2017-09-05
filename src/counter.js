import React, { Component } from 'react';
import Display from "./display.js";
import Adder from "./adder.js"


class Counter extends Component{
	constructor(props){
		super(props)
		this.state = {
			counter: 0
		}
	}
	
	incrementer = () => {
		var counter = this.state.counter;
		this.setState({counter : counter + 1})
		
	}



	render(){


	return(
		
		<div>
			<Display number={this.state.counter} />
			<Adder clickHandler={this.incrementer} />
		</div>	
		
		)
	}
}

export default Counter