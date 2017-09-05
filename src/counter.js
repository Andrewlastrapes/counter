import React, { Component } from 'react';


class Counter extends Component{
	constructor(props){
		super(props)
		this.state = {
			counter: 0
		}
	}


	clickHandler(){
		var counter = this.state.counter;
		this.setState({counter : counter + 1})
	}

	render(){


	return(
		<div onClick={this.clickHandler.bind(this)}>
			
			<button type="button">Add one</button>

			<div>
			{this.state.counter}
				
			</div>
		</div>	
		
		)
	}
}

export default Counter