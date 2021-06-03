import React, { Fragment, useState } from 'react';

const AskBudget = () => {
	const [amount, setAmount] = useState(0);

	const defineBudget = (e) => {
		setAmount(parseInt(e.target.value, 10)); //ParseInt nos transforma string en numeros enteros para poder sumarlos
	};

	const addBudget = (e) => {
		e.preventDefault();
	};

	return (
		<Fragment>
			<h2> Put your budget here </h2>

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

export default AskBudget;
