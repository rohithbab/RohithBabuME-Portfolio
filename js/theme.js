document.addEventListener('DOMContentLoaded', () => {
	const themeToggle = document.getElementById('theme-toggle');
	const icon = themeToggle.querySelector('i');
	
	// Check for saved theme preference
	const currentTheme = localStorage.getItem('theme') || 'dark';
	document.documentElement.setAttribute('data-theme', currentTheme);
	updateIcon(currentTheme);

	// Theme toggle click handler
	themeToggle.addEventListener('click', () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
		updateIcon(newTheme);
	});

	function updateIcon(theme) {
		icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
	}

	// Add intersection observer for scroll animations

	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all animated elements
	document.querySelectorAll('.project-card, .skill-item, .section-title').forEach(el => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(20px)';
		observer.observe(el);
	});
});