// корзина
export default function toggleCart() {
	const btnCart = document.getElementById('cart');
	const modalCart = document.querySelector('.cart');
	const closeBtn = document.querySelector('.cart-close');

	btnCart.addEventListener('click', () => {
		modalCart.style.display = 'flex';
		// modalCart.style.cssText = 'display: flex; color: green;'
		document.body.style.overflow = 'hidden';
	});

	closeBtn.addEventListener('click', () => {
		modalCart.style.display = '';
		document.body.style.overflow = '';
	});

}
// корзина
// **********************************************
