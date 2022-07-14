export function getUserValid(email = '', password = '') {
	let isValid: boolean;
	isValid = false;
	if (email == 'arodriguez@panpacksa.com.ar') {
		if (password == 'Fico11140556') {
			isValid = true;
		}
	}
	return isValid;
}
