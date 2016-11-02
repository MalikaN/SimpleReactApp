import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory  } from 'react-router';

import Home from './Components/Home';
import ContactPost from './Containers/ContactPost';
import HomePost from './Containers/HomePost';
import StuffPost from './Containers/StuffPost';


const route=(

	<Router history={browserHistory}>
		<Route path="/" component={Home}>
			<IndexRoute component={HomePost}/>
		<Route path="/stuff" component={StuffPost}/>
		<Route path="/contact" component={ContactPost}/>
		</Route>

	</Router>



);

ReactDOM.render(
  route,
  document.getElementById('root')
);
