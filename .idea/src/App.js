import React from 'react';
import TaskListContainer from './components/TaskList/TaskListContainer';
import HeaderContainer from './components/Header/headerContainer';
import FooterContainer from './components/Footer/FooterContainer';

const App = () => (
	<section className="todoapp">
		<HeaderContainer />
		<section className="main">
			<TaskListContainer />
			<FooterContainer />
		</section>
	</section>
);

export default App;
