import React from "react";

const Information = () => {
	return (
		<section className="information" id="information">
			<div className="information-wrapper">
				<div className="information__prices">
					<h2>Стоимость обучения</h2>
					<ul className="information__category">
						<li>
							<h4>Категория А </h4>
							<span>25 000 ₽</span>
						</li>
						<hr />
						<li>
							<h4>Категория B</h4> <span>48 000 ₽</span>
						</li>
					</ul>
					<ul className="information__advantages">
						<li>
							<img src="/icons/tick.svg" alt="tick" />
							Гибкое расписание
						</li>
						<li>
							<img src="/icons/tick.svg" alt="tick" />
							Группы выходного дня
						</li>
					</ul>
				</div>

				<div className="information__list">
					<h2>В стоимость включены</h2>

					<ul>
						<li>
							<img src="/icons/adv/adv1.svg" alt="" />
							Практические занятия по городу и автодрому
						</li>
						<li>
							<img src="/icons/adv/adv2.svg" alt="" />
							Теоретические занятия
						</li>
						<li>
							<img src="/icons/adv/adv3.svg" alt="" />
							ГСМ
						</li>
						<li>
							<img src="/icons/adv/adv4.svg" alt="" />
							Система кредитования на любой срок
						</li>
						<li>
							<img src="/icons/adv/adv5.svg" alt="" />
							Удобная рассрочка платежа
						</li>
						<li>
							<img src="/icons/adv/adv6.svg" alt="" />
							Бесплатная доставка учеников к автодрому на автобусе
						</li>
						<li>
							<img src="/icons/adv/adv7.svg" alt="" />
							V.I.P. обучение
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Information;
