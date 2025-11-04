import React from "react";

const Information = () => {
	return (
		<section className="information" id="information">
			<div className="information-wrapper">
				<div className="information__prices">
					<h2>Стоимость обучения</h2>
					<ul className="information__category">
						<li>
							<h3>Категория А </h3>
							<span>45 000 ₽</span>
						</li>
						<hr aria-hidden="true" />
						<li>
							<h3>Категория B</h3> <span>83 000 ₽</span>
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
							<div className="information__list-item">
								<img src="/icons/adv/adv1.svg" alt="" />
							</div>
							Практические занятия по городу и автодрому
						</li>
						<li>
							<div className="information__list-item">
								<img src="/icons/adv/adv2.svg" alt="" />
							</div>
							Теоретические занятия
						</li>
						<li>
							<div className="information__list-item">
								<img src="/icons/adv/adv3.svg" alt="" />
							</div>
							ГСМ
						</li>
						<li>
							<div className="information__list-item">
								<img src="/icons/adv/adv4.svg" alt="" />
							</div>
							Система кредитования на любой срок
						</li>
						<li>
							<div className="information__list-item">
								<img src="/icons/adv/adv5.svg" alt="" />
							</div>
							Удобная рассрочка платежа
						</li>
						<li>
							<div className="information__list-item">
								<img src="/icons/adv/adv6.svg" alt="" />
							</div>
							V.I.P. обучение
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Information;
