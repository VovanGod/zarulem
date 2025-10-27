"use client";

import "./MobileNav.scss";

import React, { useState, useEffect } from "react";

const MobileNav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	const closeNav = () => {
		setIsNavOpen(false);
	};

	useEffect(() => {
		const nav = document.querySelector(".mobile-nav");
		const navBtn = document.querySelector(".mobile-nav-btn");
		const body = document.body;

		if (isNavOpen) {
			nav.classList.add("mobile-nav-active");
			navBtn.classList.add("mobile-nav-btn-active");
			body.classList.add("no-scroll");
		} else {
			nav.classList.remove("mobile-nav-active");
			navBtn.classList.remove("mobile-nav-btn-active");
			body.classList.remove("no-scroll");
		}

		// Очистка при размонтировании
		return () => {
			body.classList.remove("no-scroll");
		};
	}, [isNavOpen]);

	const handleNavClick = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute("href");

		if (target && target.startsWith("#")) {
			const element = document.querySelector(target);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}

		closeNav();
	};

	return (
		<>
			<button
				className="mobile-nav-btn"
				onClick={toggleNav}
				aria-label="Открыть меню"
				aria-expanded={isNavOpen}
			>
				<span></span>
			</button>

			<div className="mobile-nav">
				<div className="mobile-nav-header">
					<div className="mobile-nav-logo">
						<img src="/icons/logo.svg" alt="логотип компании" />
						<span className="mobile-nav-logo-text">За рулём</span>
					</div>
				</div>

				<nav className="mobile-nav__content">
					<ul>
						<li>
							<a
								href="#carFleet"
								className="nav__link nav-href"
								onClick={handleNavClick}
							>
								Автопарк
							</a>
						</li>
						<li>
							<a
								href="#driverFleet"
								className="nav__link nav-href"
								onClick={handleNavClick}
							>
								Инструкторы
							</a>
						</li>
						<li>
							<a
								href="#information"
								className="nav__link nav-href"
								onClick={handleNavClick}
							>
								Стоимость
							</a>
						</li>
						<li>
							<a
								href="#faq"
								className="nav__link nav-href"
								onClick={handleNavClick}
							>
								О нас
							</a>
						</li>
						<li>
							<a
								href="#contacts"
								className="nav__link nav-href"
								onClick={handleNavClick}
							>
								Контакты
							</a>
						</li>
						<li>
							<a
								href="#documents"
								className="nav__link nav-href"
								onClick={handleNavClick}
							>
								Сведения об автошколе
							</a>
						</li>
					</ul>

					<div className="mobile-nav-contacts">
						<a href="tel:79180440777" className="mobile-nav-phone">
							8 918 04-40-777
						</a>
					</div>
				</nav>
			</div>
		</>
	);
};

export default MobileNav;
