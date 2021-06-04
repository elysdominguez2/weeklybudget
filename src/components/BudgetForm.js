import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const BudgetForm = ({ setExpense, setCreateExpense }) => {
	const [expenseName, setExpenseName] = useState('');
	const [expenseAmount, setExpenseAmount] = useState(0);
	const [error, setError] = useState(false);

	const addExpense = (e) => {
		e.preventDefault();

		if (
			expenseAmount < 1 ||
			isNaN(expenseAmount) ||
			expenseName.trim() === ''
		) {
			// isNan es para decir que solo numeros estan permitidos, si ponemos string tambien será error
			setError(true);
			return;
		}
		setError(false);

		const expense = {
			expenseName,
			expenseAmount,
			id: shortid.generate(),
		};
		setExpense(expense);
		setCreateExpense(true);

		setExpenseName('');
		setExpenseAmount(0);
	};

	return (
		<form onSubmit={addExpense}>
			<h2> Put your expenses here </h2>
			{error ? (
				<Error message="You have to complete both fields or the expense is incorrect" />
			) : null}
			<div className="field">
				<label> Expense name </label>
				<input
					type="text"
					className="u-full-width"
					placeholder="e.g.: Food"
					value={expenseName}
					onChange={(e) => setExpenseName(e.target.value)}
				/>
			</div>
			<div className="field">
				<label> Expense amount </label>
				<input
					type="number"
					className="u-full-width"
					placeholder="e.g.: 300"
					value={expenseAmount}
					onChange={(e) =>
						setExpenseAmount(parseInt(e.target.value, 10) || expenseAmount)
					}
				/>{' '}
			</div>
			<input
				type="submit"
				className="button-primary u-full-width"
				value="Add expense"
			/>
		</form>
	);
};

BudgetForm.propTypes = {
	setExpense: PropTypes.func.isRequired,
	setCreateExpense: PropTypes.func.isRequired,
};

export default BudgetForm;
