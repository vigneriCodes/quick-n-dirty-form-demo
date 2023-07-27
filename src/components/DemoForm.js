import React from 'react';
import { useForm } from 'react-hook-form';

function DemoForm({ handleInfoSet }) {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => handleInfoSet(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('firstIngredient')} />
			<select {...register('firstQuantity')}>
				<option value={1}>1 oz.</option>
				<option value={2}>2 oz.</option>
				<option value={3}>3 oz.</option>
			</select>
			<br />
			<input {...register('secondIngredient')} />
			<select {...register('secondQuantity')}>
				<option value={1}>1 oz.</option>
				<option value={2}>2 oz.</option>
				<option value={3}>3 oz.</option>
			</select>
			<br />
			<input {...register('thirdIngredient')} />
			<select {...register('thirdQuantity')}>
				<option value={1}>1 oz.</option>
				<option value={2}>2 oz.</option>
				<option value={3}>3 oz.</option>
			</select>
			<br />
			<input {...register('fourthIngredient')} />
			<select {...register('fourthQuantity')}>
				<option value={1}>1 oz.</option>
				<option value={2}>2 oz.</option>
				<option value={3}>3 oz.</option>
			</select>
			<br />
			<input type='submit' />
		</form>
	);
}

export default DemoForm;
