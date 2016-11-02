import React from 'react';
import {Link,IndexLink } from 'react-router';
import styles from '../CSS/Home.css';



class Home extends React.Component{

	render(){

		return(
			<div>
        		<h1>Simple SPA</h1>
        		<ul className="header">
          			<li><IndexLink to="/" activeClassName={styles.active}>Home</IndexLink></li>
          			<li><Link to="/stuff" activeClassName={styles.active}>Stuff</Link></li>
          			<li><Link to="/contact" activeClassName={styles.active}>Contact</Link></li>
        		</ul>
       			<div className="content">
            		{this.props.children}
        		</div>
      		</div>
		);
	}
}

export default Home;