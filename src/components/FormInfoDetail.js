import React from 'react';

function FormInfoDetail({ formInfo }) {
	return (
		<>
			<h1>Form Information Detail Area</h1>
			<h2>Your Ingrediments:</h2>
			<h3>
				{formInfo.firstQuantity} ounces of {formInfo.firstIngredient}
			</h3>
			<h3>
				{formInfo.secondQuantity} ounces of {formInfo.secondIngredient}
			</h3>
			<h3>
				{formInfo.thirdQuantity} ounces of {formInfo.thirdIngredient}
			</h3>
			<h3>
				{formInfo.fourthQuantity} ounces of {formInfo.fourthIngredient}
			</h3>
		</>
	);
}

export default FormInfoDetail;
