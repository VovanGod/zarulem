"use client";
import React, { useState } from "react";

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqData = [
		{
			question: "Обучение в кредит",
			answer: "Система кредитования на любой срок. Рассрочка платежа",
		},
		{
			question: "Доступные цены",
			answer: `Категория А – 25 000 ₽\nКатегория В – 48 000 ₽`,
		},
		{
			question: "Опытные инструкторы",
			answer: "Индивидуальный подход к каждому ученику",
		},
		{
			question: "Автомобили и мотоциклы",
			answer:
				"Только в нашей школе вы можете выбрать транспортное средство для обучения",
		},
		{
			question: "Любое время занятий",
			answer: "Теоретические и практические занятия в удобное для вас время",
		},
	];

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="faq" id="faq">
			<div className="faq__container">
				<h2 className="faq__title">Наши преимущества</h2>
				<div className="faq__list">
					{faqData.map((item, index) => (
						<div
							key={index}
							className={`faq__item ${
								activeIndex === index ? "faq__item--active" : ""
							}`}
						>
							<button
								className="faq__question"
								onClick={() => toggleFAQ(index)}
								aria-expanded={activeIndex === index}
							>
								<span className="faq__question-text">{item.question}</span>
								<span className="faq__icon">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path
											d={
												activeIndex === index
													? "M3 8 L13 8"
													: "M3 8 L13 8 M8 3 L8 13"
											}
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</button>
							<div className="faq__answer-wrapper">
								<div className="faq__answer">
									{item.answer.split("\n").map((line, i) => (
										<p key={i}>{line}</p>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Faq;
