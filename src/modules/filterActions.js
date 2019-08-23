// Фильтр акции
export default function filterActions() {
	const cards = document.querySelectorAll('.goods .card'),
		discountCheckbox = document.getElementById('discount-checkbox'),
		goods = document.querySelector('.goods'),
		min = document.getElementById('min'),
		max = document.getElementById('max'),
		search = document.querySelector('.search-wrapper_input'),
		searchBtn = document.querySelector('.search-btn');

////////////////////////////////////////////////			

	discountCheckbox.addEventListener('click', filterAll);
	min.addEventListener('change', filterAll);
	max.addEventListener('change', filterAll);

	searchBtn.addEventListener('click', filterAll);
	search.addEventListener('keydown', (e) => {	
		if (e.keyCode === 13) filterAll();
	});

}
// Фильтр акции
