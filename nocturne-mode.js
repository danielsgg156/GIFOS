//TODO: VARIABLES ****/
const btnNocMode = document.querySelector('#noc-mode');

//TODO: FUNCTIONS ****/
const getNocMode = () => {
	return localStorage.getItem('nocMode');
};
const setNocMode = (value) => {
	localStorage.setItem('nocMode', value.toString());
};

const validateNocMode = () => {
	const bodyClassList = document.body.classList;
	if (getNocMode() == 'true') {
		bodyClassList.add('theme--dark');
		btnNocMode.innerText = 'MODO DIURNO';
	} else {
		bodyClassList.remove('theme--dark');
		btnNocMode.innerText = 'MODO NOCTURNO';
	}
};

//TODO: EVENTS ****/
btnNocMode.addEventListener('click', () => {
	const bodyClassList = document.body.classList;

	if (bodyClassList.contains('theme--dark')) {
		btnNocMode.innerText = 'MODO NOCTURNO';
		setNocMode(false);
	} else {
		btnNocMode.innerText = 'MODO DIURNO';
		setNocMode(true);
	}

	bodyClassList.toggle('theme--dark');
});

validateNocMode();
