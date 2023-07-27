import React, { useState } from 'react';

import DemoForm from './DemoForm';
import FormInfoDetail from './FormInfoDetail';

function FormControlWrapper() {
	const [showFormBool, setShowFormBool] = useState(true);
	const [formInfo, setFormInfo] = useState({});

	function handleInfoSet(data) {
		setFormInfo(data);
		setShowFormBool(false);
		console.log(formInfo);
	}

	function handleFormToggle() {
		setShowFormBool((s) => !s);
	}

	return (
		<>
			<button onClick={handleFormToggle}>Toggle</button>
			<h1>Let's Go!!!</h1>
			{showFormBool ? (
				<DemoForm handleInfoSet={handleInfoSet} formInfo={formInfo} />
			) : (
				<FormInfoDetail formInfo={formInfo} />
			)}
		</>
	);
}

export default FormControlWrapper;
