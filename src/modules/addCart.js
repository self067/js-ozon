

// **********************************************
// работа с товаром
export default function addCart() {
	const cards = document.querySelectorAll('.goods .card');
	const cartWrap = document.querySelector('.cart-wrapper');
	const cartEmpty = document.getElementById('cart-empty');

	const countGoods = document.querySelector('#cart .counter');

	cards.forEach((card) => {
		const btn = card.querySelector('button');

		btn.addEventListener('click', () => {
			const cardClone = card.cloneNode(true);
			cartWrap.appendChild(cardClone);
			// cartEmpty.remove();
			showData();

			const removeBtn = cardClone.querySelector('.btn');
			removeBtn.textContent = 'Удалить из корзины';

			removeBtn.addEventListener('click', () => {
				cardClone.remove();
				showData();
			});

		});
	});

	function showData() {
		const cardsCart = cartWrap.querySelectorAll('.card'),
					cardsPrice = cartWrap.querySelectorAll('.card-price'),
					cardTotal = document.querySelector('.cart-total span');

		countGoods.textContent = cardsCart.length;
		let sum = 0;

		cardsPrice.forEach((cardPrice) => {
			let price = parseFloat(cardPrice.textContent);
			sum += price;
			// console.log(sum);

		});
		cardTotal.textContent = sum;
		if (cardsCart.length !== 0) {
			cartEmpty.remove();
		} else {
			cartWrap.appendChild(cartEmpty);
		}
	}
}
// работа с товаром 
// **********************************************
