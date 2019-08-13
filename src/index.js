'use strict';

// checkbox

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

checkbox.forEach( (elem) => {

	elem.addEventListener('change', function() {
		if( this.checked){
			this.nextElementSibling.classList.add('checked');
			// console.log('yes');
		}
		else {
			this.nextElementSibling.classList.remove('checked');
			// console.log('No');
		}
		// console.log(this.checked);
});
});

// console.dir(checkbox);
// console.log(checkbox);

// checkbox
// **********************************************
// корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');

btnCart.addEventListener( 'click', () => {
	modalCart.style.display = 'flex';
	// modalCart.style.cssText = 'display: flex; color: green;'
	document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
	modalCart.style.display = '';
	document.body.style.overflow = '';
});

// корзина
// **********************************************
// работа с товаром
const cards = document.querySelectorAll('.goods .card');
const cartWrap = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const countGoods = document.querySelector('#cart .counter');


cards.forEach( (card) => {
	const btn = card.querySelector('button');

	btn.addEventListener('click', () => {
		const cardClone = card.cloneNode(true);
		cartWrap.appendChild(cardClone);
		cartEmpty.remove();
		showData();
	});
});

function showData() {
	const cardsCart = cartWrap.querySelectorAll('.card');
	// const cardsLength = cardsCart.length;
	countGoods.textContent = cardsCart.length;
	// console.log(cardsCart.length);
}

// работа с товаром 
// **********************************************
