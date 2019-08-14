'use strict';

// checkbox
function toggleCheckbox() {
	// const checkbox = document.getElementById('discount-checkbox');
	const checkbox = document.querySelectorAll('.filter-check_checkbox');

	// for( let i = 0, le = checkbox.length; i < le; i++){
	// 	checkbox[i].addEventListener('change', function() {
	// 		if( this.checked){
	// 			this.nextElementSibling.classList.add('checked');
	// 		}
	// 		else {
	// 			this.nextElementSibling.classList.remove('checked');
	// 		}
	// 	});
	// }

	checkbox.forEach((elem) => {

		elem.addEventListener('change', function () {
			if (this.checked) {
				this.nextElementSibling.classList.add('checked');
				// console.log('yes');
			} else {
				this.nextElementSibling.classList.remove('checked');
				// console.log('No');
			}
			// console.log(this.checked);
		});
	});

	// console.dir(checkbox);
	// console.log(checkbox);
}
// checkbox
// **********************************************

// **********************************************
// корзина
function toggleCart() {
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

// **********************************************
// работа с товаром
function addCart() {
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

// **********************************************
// Фильтр акции
function filterActions() {
	const cards = document.querySelectorAll('.goods .card'),
		discountCheckbox = document.getElementById('discount-checkbox'),
		goods = document.querySelector('.goods'),
		min = document.getElementById('min'),
		max = document.getElementById('max'),
		search = document.querySelector('.search-wrapper_input'),
		searchBtn = document.querySelector('.search-btn');

	function filterAll (){

		cards.forEach((card) => {
			const cardPrice = card.querySelector('.card-price');
			const price = parseFloat(cardPrice.textContent);
			const searchText = new RegExp(search.value.trim(), 'i'); // i - case insensitive
			const title = card.querySelector('.card-title');

			if (  ((min.value && price < min.value) || (max.value && price > max.value)) ||
			      ( discountCheckbox.checked && !card.querySelector('.card-sale')) ||
						( search.value.trim() && !searchText.test(title.textContent)) 

			) {
					card.parentNode.style.display = 'none';
						// card.parentNode.remove();
				} else {
					card.parentNode.style.display = '';
					// document.querySelector('.goods').appendChild(card.parentNode);
				}
		});
	}
////////////////////////////////////////////////			

	discountCheckbox.addEventListener('click', filterAll);
	min.addEventListener('change', filterAll);
	max.addEventListener('change', filterAll);

	searchBtn.addEventListener('click', filterAll);
	search.addEventListener('keydown', (e) => {
		console.log(e);
		if (e.keyCode === 13) filterAll()});
	
    

	// // фильтр по акции
	// discountCheckbox.addEventListener('click', () => {
	// 	cards.forEach((card) => {
	// 		if (discountCheckbox.checked) {
	// 			if (!card.querySelector('.card-sale')) {
	// 				card.parentNode.style.display = 'none';
	// 				// card.parentNode.remove();
	// 			}
	// 		} else {
	// 			card.parentNode.style.display = '';
	// 			// document.querySelector('.goods').appendChild(card.parentNode);
	// 		}
	// 	});
	// });

	// min.addEventListener('change', filterPrice);
	// max.addEventListener('change', filterPrice);

	// function filterPrice() {
	// 	cards.forEach((card) => {
	// 		const cardPrice = card.querySelector('.card-price');
	// 		const price = parseFloat(cardPrice.textContent);
	// 		// console.log(price);
	// 		// console.log(min.value);
	// 		// console.log(max.value);

	// 		if ((min.value && price < min.value) || (max.value && price > max.value)) {
	// 			card.parentNode.remove();
	// 			// card.parentNode.style.display = 'none';				
	// 		} else {
	// 			goods.appendChild(card.parentNode);
	// 			// card.parentNode.style.display = '';
	// 		}
	// 	});
	// }
     

// 	// поиск
// 	searchBtn.addEventListener('click', () => {
// 		const searchText = new RegExp(search.value.trim(), 'i'); // i - case insensitive
// 		console.log(searchText);
// 		cards.forEach((card) => {
// 			const title = card.querySelector('.card-title');
// 			if (!searchText.test(title.textContent)) {
// 				card.parentNode.style.display = 'none';
// 			} else {
// 				card.parentNode.style.display = '';

// 			}
// 		});
// 		search.value = '';
// 	});

}
// Фильтр акции
// **********************************************
toggleCheckbox();
toggleCart();
addCart();
filterActions();

// **********************************************
