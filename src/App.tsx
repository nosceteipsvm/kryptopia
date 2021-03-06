import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import FourOhFour from './components/FourOhFour';
import Login from './components/Login';
import Register from './components/Register';
import Support from './components/Support';

const App: React.FC = () => {
	return (
		<Switch>
			<Route exact path='/' component={Landing} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/register' component={Register} />
			<Route exact path='/support' component={Support} />
			<Route component={FourOhFour} />
		</Switch>
	)
}

export default App;