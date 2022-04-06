(function(){
	
	document.body.innerHTML = '';
	// const style = document.createElement('link');
	// style.rel = "stylesheet";
	// style.href = "./css/ie.css";
	// document.head.appendChild(style);

	const header = document.createElement('div');
	header.classList.add('header');
	const logo = document.createElement('img');
	logo.classList.add('logo');
	logo.src='./img/logo-black.svg';
	header.appendChild(logo);

	const container = document.createElement('div');
	container.classList.add('container');

	const text1 = document.createElement('div');
	text1.classList.add('text');
	const textSpan = document.createElement('span');
	textSpan.textContent = ' — это проект, где каждый сотрудник ИТ-дирекции Теlе2 может подать идею или протестировать гипотезу, как улучшить рабочий процесс или конкретный продукт.';
	const marker = document.createElement('span');
	marker.classList.add('marker');
	marker.textContent = '«Идеи и гипотезы»';
	text1.appendChild(marker);
	text1.appendChild(textSpan);
	container.appendChild(text1);

	const text2 = document.createElement('div');
	text2.classList.add('desc');

	document.body.appendChild(header);
	document.body.appendChild(container);

})();