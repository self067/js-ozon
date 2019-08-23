// checkbox
export default function toggleCheckbox() {
	// const checkbox = document.getElementById('discount-checkbox');
	const checkbox = document.querySelectorAll('.filter-check_checkbox');

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
