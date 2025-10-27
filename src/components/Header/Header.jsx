import React from "react";
import "./Header.scss";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<a href="/" className="header__logo">
					<img src="/icons/logo.svg" alt="логотип компании" />
					<div className="header__logo-name">За рулём</div>
				</a>

				<nav className="header__nav">
					<ul>
						<li>
							<a href="#carFleet" className="nav__link">
								Автопарк
							</a>
						</li>
						<li>
							<a href="#driverFleet" className="nav__link">
								Инструкторы
							</a>
						</li>
						<li>
							<a href="#information" className="nav__link">
								Стоимость
							</a>
						</li>
						<li>
							<a href="#faq" className="nav__link">
								О нас
							</a>
						</li>
						<li>
							<a href="#contacts" className="nav__link">
								Контакты
							</a>
						</li>
						<li>
							<a href="#documents" className="nav__link">
								Сведения об автошколе
							</a>
						</li>
					</ul>
				</nav>

				<div className="header__contacts">
					<a href="tel:79180440777">8 (918) 04-40-777</a>
				</div>

				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
