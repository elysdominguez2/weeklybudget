import React, { useState, useEffect } from 'react';
import AskBudget from './components/AskBudget';
import BudgetForm from './components/BudgetForm';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {
	const [budget, setBudget] = useState(0);
	const [remaining, setRemaining] = useState(0);
	const [showAsk, setShowAsk] = useState(true);
	const [expenses, setExpenses] = useState([]);
	const [expense, setExpense] = useState({});
	const [createExpense, setCreateExpense] = useState(false);

	useEffect(() => {
		if (createExpense) {
			setExpenses([...expenses, expense]);

			const remainingBudget = remaining - expense.expenseAmount;
			setRemaining(remainingBudget);

			setCreateExpense(false);
		}
	}, [expense, createExpense, expenses, remaining]);

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
								<BudgetForm
									setExpense={setExpense}
									setCreateExpense={setCreateExpense}
								/>
							</div>
							<div className="one-half column">
								<List expenses={expenses} />
								<BudgetControl budget={budget} remaining={remaining} />
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
