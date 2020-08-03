import React from 'react';

import './BurgerIngredient.css';

const burgerIngredient = (props) => {
	let ingridient = null;

	switch (props.type) {
		case ('bread-top'):
			ingridient = (
				<div className="BreadTop">
					<div className="Seeds1"></div>
					<div className="Seeds2"></div>
				</div>
			);
			break;

		case ('meat'):
			ingridient = <div className="Meat"></div>
			break;

		case ('cheese'):
			ingridient = <div className="Cheese"></div>
			break;

		case ('bacon'):
			ingridient = <div className="Bacon"></div>
			break;

		case ('salad'):
			ingridient = <div className="Salad"></div>
			break;

		case ('bread-bottom'):
			ingridient = <div className="BreadBottom"></div>
			break;

		default:
			ingridient = null;
	}

	return ingridient;
}

export default burgerIngredient;