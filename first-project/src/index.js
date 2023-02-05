import _ from 'lodash';

function hello() {

	const element = document.createElement('p');

	element.innerHTML = _.join(['Hola', 'Webpack!', 'Laravelers.com'], ' ');

	return element;

}

document.body.appendChild(hello());

