'use strict';
import addCart from './modules/addCart';
import filterActions from './modules/filterActions';
// import filterAll from './modules/filterAll';
import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCart from './modules/toggleCart';
import toggleCheckbox from './modules/toggleCheckbox';

// **********************************************
(async function(){
	const db = await getData();
	// .then((data) => {

		renderCards(db);
		renderCatalog();
		toggleCheckbox();
		toggleCart();
		addCart();
		filterActions();
	
	// });
	

}());



// **********************************************
