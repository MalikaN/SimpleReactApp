import React from 'react';
import styles from '../CSS/Home.css';



class ContactPost extends React.Component{


	constructor(props){
		super(props);
		this.state={value:''};
		this.handleChange =this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({value:event.target.value});
	}

	handleSubmit(event){
		alert(this.state.value);
	}

	render(){
		return(
			<div>
	          <h2>GOT QUESTIONS?</h2>
	          <p>The easiest thing to do is post them here :</p>
	
	          	<input type="text" placeholder="Enter Name" value={this.state.value} onChange={this.handleChange}/><br/><br/>
				<input type="text" placeholder="Enter Email" ref=""/><br/><br/>
	          	<textarea rows="2" cols="24" placeholder="Enter your Message"></textarea><br/><br/>
	            <button type="button" onClick={this.handleSubmit}>Submit</button>

	         
	          <br/>
	          
	          <br/>
	          
	          
        	</div>
		);
	}

}
export default ContactPost;