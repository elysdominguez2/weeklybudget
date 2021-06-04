import React, { Fragment, useState } from 'react';
import Error from './Error.js';
import PropTypes from 'prop-types';

const AskBudget = ({ setBudget, setRemaining, setShowAsk }) => {
	const [amount, setAmount] = useState(0);

	const [error, setError] = useState(false);

	const defineBudget = (e) => {
		setAmount(parseInt(e.target.value, 10)); //ParseInt nos transforma string en numeros enteros para poder sumarlos
	};

	const addBudget = (e) => {
		e.preventDefault();

		if (amount < 1 || isNaN(amount)) {
			// isNan es para decir que solo numeros estan permitidos, si ponemos string tambien será error
			setError(true);
			return;
		}
		setError(false);
		setBudget(amount);
		setRemaining(amount);
		setShowAsk(false);
	};

	return (
		<Fragment>
			<h2> Put your budget here </h2>

			{error ? <Error message="The Budget is not correct" /> : null}

			<form onSubmit={addBudget}>
				<input
					type="number"
					className="u-full-width"
					placeholder="Put your budget here"
					onChange={defineBudget}
				/>

				<input
					type="submit"
					className="button-primary u-full-width"
					value="Definir presupuesto"
				/>
			</form>
		</Fragment>
	);
};

AskBudget.propTypes = {
	setBudget: PropTypes.func.isRequired,
	setRemaining: PropTypes.func.isRequired,
	setShowAsk: PropTypes.func.isRequired,
};

export default AskBudget;
