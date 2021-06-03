import React, { useState } from 'react';
import AskBudget from './components/AskBudget';
import BudgetForm from './components/BudgetForm';

function App() {
	const [budget, setBudget] = useState(0);
	const [remaining, setRemaining] = useState(0);
	const [showAsk, setShowAsk] = useState(true);

	return (
		<div className="container">
			<header>
				<h1>Weekly Budget</h1>

				<div className="principal-container cont">
					{showAsk ? (
						<AskBudget
							setBudget={setBudget}
							setRemaining={setRemaining}
							setShowAsk={setShowAsk}
						/>
					) : (
						<div className="row">
							<div className="one-half column">
								<BudgetForm />
							</div>
							<div className="one-half column">2</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
