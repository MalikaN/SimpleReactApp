import React from 'react';
import styles from '../CSS/Home.css';



class ContactPost extends React.Component{

	constructor(props){
		super(props);
		this.state={value:''};
		this.handleChange =this.handleChange.bind(this);
		this.handleSubmit=this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({value:event.target.value});
	}

	handleSubmit(event){
		alert('Value is'+this.state.value);
	}

	render(){
		return(
			<div>
	          <h2>GOT QUESTIONS?</h2>
	          <p>The easiest thing to do is post them here :</p>
	          <table>
	          	<tr>
	          		<td><label className="label">Full Name </label></td>
	          		<td>: <input type="text" placeholder="Enter Name" value={this.state.value} onChange={this.handleChange}/></td>
	          	</tr>
	      		<tr>
	      			<td><label className="label">Email </label></td>
	          		<td>: <input type="text" placeholder="Enter Email" ref=""/></td>
	      		</tr>
	            <tr>
	            	<td><label className="label">Message </label></td>
	          		<td>: <textarea rows="2" cols="24" placeholder="Enter your Message"></textarea> </td>
	            </tr>
	            <tr>
	            	<td></td>
	          		<td><button type="button" onClick={this.handleSubmit}>Submit</button></td>
	            </tr>
	          </table>
	         
	          <br/>
	          
	          <br/>
	          
	          
        	</div>
		);
	}

}
export default ContactPost;