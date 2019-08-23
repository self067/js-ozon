// **********************************************
import filterAll from './filterAll';

export default function renderCatalog(){
	const cards = document.querySelector('.goods .card');
	const catalogList = document.querySelector('.catalog-list');
	const catalogBtn = document.querySelector('.catalog-button');
	const catalogWrapper = document.querySelector('.catalog');
	const categories = new Set();

	cards.forEach((card) => {
		categories.add(card.dataset.category);
		// console.dir(card.dataset.category);
	})

	categories.forEach((item) => {
		const li = document.createElement('li');
		li.textContent = item;
		catalogList.appendChild(li);

	});

	const allLi = catalogList.querySelectorAll('li');
	
	catalogBtn.addEventListener('click', (event) => {
		if( catalogWrapper.style.display) 
			catalogWrapper.style.display = '';
		else 
			catalogWrapper.style.display = 'block';
	
		if( event.target.tagName === 'LI') {
//?
			cards.forEach((card) => {
				if( card.dataset.category === event.target.textContent ) {
					card.style.display = '';
				} else card.style.display = 'none';
			});

			allLi.forEach((elem) => {
				if(elem === event.target) elem.classList.add('active');
				else elem.classList.remove('active');

			});

			filterTitle.textContent = event.target.textContent;
			filterAll();
		}
	});
}

// **********************************************
