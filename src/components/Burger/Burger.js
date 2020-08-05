import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	//transform an object to an array:
	let ingredientsArr = Object.keys(props.ingredients).map(igKey => {
		return [...Array(props.ingredients[igKey])].map((_, i) => {
			return <BurgerIngredient key={igKey + i} type={igKey} />;
		})
	}).reduce((arr, el) => {
		return arr.concat(el);
	}, []);

	if (ingredientsArr.length === 0) {
		ingredientsArr = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top" />
			{ingredientsArr}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
}

export default burger;