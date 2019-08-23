// **********************************************
export default function filterAll (){

	const cards = document.querySelectorAll('.goods .card'),
		discountCheckbox = document.getElementById('discount-checkbox'),
		min = document.getElementById('min'),
		max = document.getElementById('max'),
		activeLi = querySelector('.cataliog-list li.active');


	cards.forEach((card) => {
		const cardPrice = card.querySelector('.card-price');
		const price = parseFloat(cardPrice.textContent);
		const searchText = new RegExp(search.value.trim(), 'i'); // i - case insensitive
		const title = card.querySelector('.card-title');

//?		card.parentNode.style.display = '';


		if (  ((min.value && price < min.value) || (max.value && price > max.value)) ||
					( discountCheckbox.checked && !card.querySelector('.card-sale')) ||
					( search.value.trim() && !searchText.test(title.textContent)) 

		) {
				card.parentNode.style.display = 'none';
					// card.parentNode.remove();
			} 
//???????????????????????????????????	
			else if(activeLi && card.dataset.category !== activeLi.textContent)
				card.parentNode.style.display = 'none';
//???????????????????????????????????	
			
			
			else {
				card.parentNode.style.display = '';
				// document.querySelector('.goods').appendChild(card.parentNode);
			}
	});
}

// **********************************************
