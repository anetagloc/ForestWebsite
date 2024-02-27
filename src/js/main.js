const navItems = document.querySelector('.nav-mobile');
const burgerBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-item');
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navItems.classList.toggle('nav-mobile--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navItems.classList.remove('nav-mobile--active');
		});
	});
};

burgerBtn.addEventListener('click', handleNav);


//automatyczne dodawanie roku
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();