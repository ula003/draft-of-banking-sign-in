
async function fetchPage(url) {
	const response = await fetch(url);

	if (response.ok) {
		const content = await response.text();
		document.open();
		document.write(content);
		document.close();
	} else {
		rootDiv.innerHTML = '<h1>404 Not Found</h1>';
	}
}

function navigate(event) {
	event.preventDefault();
	const path = event.target.getAttribute('href');
	window.history.pushState({}, '', path);
	updateContent(path);
}

function updateContent(path) {
	const route = path || window.location.pathname;

	const routes = {
		'/': '/src/pages/index.html',
		'/signup': '/src/pages/signup.html',
		'/signin': '/src/pages/signin.html',
	};

	const page = routes[route] || '404.html';
	fetchPage(page);
}

window.onpopstate = () => updateContent();

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('a.nav-link').forEach(link => {
		link.addEventListener('click', navigate);
	});
	updateContent();
});
