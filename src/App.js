import React from 'react';
import AskBudget from './components/AskBudget';

function App() {
	return (
		<div className="container">
			<header>
				<h1>Weekly Budget</h1>

				<div className="principal-container cont">
					<AskBudget />
				</div>
			</header>
		</div>
	);
}

export default App;
