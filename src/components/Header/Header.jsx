import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<div className="header">
			<a href="/" className="header__logo">
				<img src="/icons/logo.svg" alt="логотип компании" />
				<div className="header__logo-name">За рулём</div>
			</a>

			<nav>
				<ul>
					<li>
						<a href="#!" className="nav__link">
							Об автошколе
						</a>
					</li>
					<li>
						<a href="#!" className="nav__link">
							Автопарк
						</a>
					</li>
					<li>
						<a href="#!" className="nav__link">
							Инструкторы
						</a>
					</li>
					<li>
						<a href="#!" className="nav__link">
							Филиалы
						</a>
					</li>
					<li>
						<a href="#!" className="nav__link">
							Стоимость
						</a>
					</li>
					<li>
						<a href="#!" className="nav__link">
							Контакты
						</a>
					</li>
					<li>
						<a href="#!" className="nav__link">
							Сведения об автошколе
						</a>
					</li>
				</ul>
			</nav>

			<div className="header__contacts">
				<a href="tel:79180440777">8 (918) 04-40-777</a>
			</div>
		</div>
	);
};

export default Header;
