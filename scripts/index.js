//store the products array in localstorage as "products"
let products = JSON.parse(localStorage.getItem('products')) || [];
let show_products = document.querySelector('#show_products');

show_products.addEventListener('click', function () {
	window.location.href = '../inventory.html';
})

let form = document.querySelector('#products')

form.addEventListener('submit', function (e) {
	e.preventDefault()
	let product = {
		type: form.type.value,
		desc: form.desc.value,
		price: form.price.value,
		image: form.image.value,
	}
	products.push(product);
	localStorage.setItem('products', JSON.stringify(products));
	form.reset()
})

