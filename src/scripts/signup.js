import '../styles/signup.css'

const form = document.forms.signup;

const URL = 'http://localhost:3000/users';

form.onsubmit = (e) => {
	e.preventDefault();

	const user = {};

	const fm = new FormData(form);

	fm.forEach((value, key) => {
		user[key] = value;
	});

	// create user
	fetch(URL, {
		method: 'POST',
		body: JSON.stringify(user)
	});
}