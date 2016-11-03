import React from 'react';
import {Link,IndexLink } from 'react-router';
import styles from '../CSS/Home.css';



class Home extends React.Component{

	render(){

		return(
			<div>
        		<h1>Simple React App</h1>
        		<ul className="header">
          			<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          			<li><Link to="/stuff" activeClassName="active">Posts</Link></li>
          			<li><Link to="/contact" activeClassName="active">Contact US</Link></li>
        		</ul>
       			<div className="content">
            		{this.props.children}
        		</div>
      		</div>
		);
	}
}

export default Home;