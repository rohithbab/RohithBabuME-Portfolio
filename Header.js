import React, { useState } from 'react';
import './Header.css';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="header">
			<div className="container header-container">
				<div className="logo">
					<h1>John Doe</h1>
					<p className="title">Full-Stack Developer</p>
				</div>
				
				<nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
					<ul className="nav-list">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>

				<button 
					className="menu-toggle" 
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
	);
};

export default Header;