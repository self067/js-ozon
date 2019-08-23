
// получение данных с сервера
export default function getData() {
	const goodsWrapper = document.querySelector('.goods');
	fetch('../db/db.json')
		.then((response) => {
			if(response.ok) {
				// console.log(response.text());
				return response.json();
			} else {
				throw new Error ('Данные не были получены, ошибка: ' + response.status);
			}
		})
		.then( (data) => {
			return data;  //renderCards(data))
		})
		.catch((err) => {
			console.warn(err);
			goodsWrapper.innerHTML = '<div style="color: red; font-size: 30px">Упс !!!</div>';
		});
}
