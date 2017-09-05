import React, { Component } from 'react';
import Counter from "./counter.js"


class Adder extends Component{
	constructor(props){
		super(props)
	
	
	}
	

	render(){


	return(
		
		<div>
			
			<button onClick={this.props.clickHandler}>+</button>

		</div>	
		
		)
		
	}	
}







export default Adder