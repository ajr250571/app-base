export async function getUserValid(email = '', password = '') {
	let isValid: boolean;
	isValid = false;
	// Fetch al servidor
	/*
	const res = await fetch('https://localhost:4000/user/valid', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	});
	*/
	isValid = true;
	return isValid;
}
