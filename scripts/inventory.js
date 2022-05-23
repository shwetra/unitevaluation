let add_product = document.querySelector('#add_more_product');
let all_products = document.querySelector('#all_products');

add_product.addEventListener('click', function () {
	window.location.href = '../index.html';
})


let products = JSON.parse(localStorage.getItem('products')) || []


function createCard(product, index) {

	let card = document.createElement('div');

	let image = document.createElement('img')
	let type = document.createElement('p')
	let price = document.createElement('p')
	let description = document.createElement('p')
	let button = document.createElement('button')
	button.setAttribute('id', 'remove_product')
	button.innerHTML = 'Remove Product'

	image.src = product.image;
	type.innerHTML = product.type;
	price.innerHTML = product.price
	description.innerHTML = product.desc

	card.append(image, type, description, price, button);

	button.addEventListener('click', () => {
		products.splice(index, 1);
		localStorage.setItem('products', JSON.stringify(products));
		display(products);
	})

	return card

}


function display(products) {
	all_products.innerHTML = '';
	products.forEach((element, index) => {
		let card = createCard(element, index);
		all_products.appendChild(card);
	});
}

display(products);