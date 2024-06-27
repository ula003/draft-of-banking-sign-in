import '../styles/signin.css'

const signin = document.forms.signin;
const URL = 'http://localhost:3000/users';

function auth (user) {
    const users = fetch(URL)
	.then(response => response.json())
	.then(json => return.json());
    return Boolean(users.find((elem) => elem.email === user.email && elem.password === user.password));
}
signin.onsubmit = (e) => {
	e.preventDefault();

	const user = {};

	const fm = new FormData(signin);

	fm.forEach((value, key) => {
		user[key] = value;
	});

	const isSignedUp = auth(user);

	if (isSignedUp) {
		alert('Welcome');
	} else {
		alert('You should be signed up');
	}
}