import React from 'react';

const BudgetForm = () => {
	return (
		<form>
			<h2> Put your expenses here </h2>
			<div className="field">
				<label> Expense name </label>
				<input type="text" className="u-full-width" placeholder="e.g.: Food" />
			</div>

			<div className="field">
				<label> Expense amount </label>
				<input type="number" className="u-full-width" placeholder="e.g.: 300" />
			</div>

			<input
				type="submit"
				className="button-primary u-full-width"
				value="Add expense"
			/>
		</form>
	);
};

export default BudgetForm;
