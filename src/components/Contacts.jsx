import React from "react";

const Contacts = () => {
	return (
		<section className="contacts" id="contacts">
			<h2 className="contacts__h2">Контакты</h2>

			<div className="contacts-wrapper">
				<ul>
					<li>
						<h4>Часы работы</h4>
						<p>пн-чт 10:00 - 19:00, пт 10:00 - 18:00</p>
					</li>
					<li>
						<h4>Адрес</h4>
						<p>Краснодар, проезд Плановый 9 (3 этаж)</p>
					</li>
					<li>
						<h4>Единый телефон</h4>
						<a href="tel:79180440777" className="info">
							+7 918 04-40-777
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<h4>Приемная коммисия</h4>
						<a href="tel:79885000555" className="info">
							+7 (988) 5-000-555
						</a>
					</li>
					<li>
						<h4>Е-mail</h4>
						<p className="info">2699777@mail.ru</p>
						<p className="info">zarulem555@mail.ru</p>
					</li>
					<li className="hrefs">
						<a href="#!">
							<img src="/icons/vk.svg" alt="vkontakte" className="href" />
						</a>
						<a href="#!">
							<img src="/icons/ok.svg" alt="одноклассники" className="href" />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Contacts;
