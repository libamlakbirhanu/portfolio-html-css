const sections = document.querySelectorAll('.section');
const secBtnsContainer = document.querySelectorAll('.controls');
const secBtns = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');

const pageTransition = () => {
	for (let i = 0; i < secBtns.length; i++) {
		secBtns[i].addEventListener('click', function () {
			if (!this.classList.contains('active-btn')) {
				const currentButton = document.querySelector('.active-btn');

				this.classList.add('active-btn');
				currentButton.classList.remove('active-btn');
			}
		});
	}

	body.addEventListener('click', (e) => {
		const id = e.target.dataset.id;
		if (id) {
			sections.forEach((section) => {
				section.classList.remove('active');
			});

			const elem = document.getElementById(id);
			elem.classList.add('active');
		}
	});
};

pageTransition();
