"use client";

import React, { useState } from "react";

const Documents = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const questionsData = [
		{
			id: 1,
			question: "Основные сведения",
			answer: [
				"Наименование: Частное образовательное учреждение дополнительного профессионального образования Автошкола За рулём",
				"Дата создания: 10.11.2009 г.",
				"Адрес: г. Краснодар, ул. им. Филатова, д. 22/A",
				"Единый телефон: +7 (918) 044-07-77",
			],
		},
		{
			id: 2,
			question: "Лицензия",
			answer: ["Скачать файл"],
		},
		{
			id: 3,
			question: "Образование",
			answer: [
				"Уровень образования — профессиональная подготовка, профессиональная переподготовка, повышение квалификации",
				"Форма обучения — очная",
				"Реализуемые программы профессиональной подготовки водителей транспортных средств: категории «А», «В»",
				"Нормативный срок обучения — определяется в соответствии с Приказ Минобрнауки России от 26 декабря 2013 г. № 1408 «Об утверждении примерных программ профессионального обучения водителей транспортных средств соответствующих категорий и подкатегорий» (зарегистрирован Минюстом России 9 июля 2014 г., регистрационный № 33026)",
				"Язык образования — русский",
			],
		},
	];

	const toggleQuestion = (index) => {
		setActiveIndex(activeIndex === index ? -1 : index);
	};

	return (
		<section className="documents" id="documents">
			<div className="documents__container">
				<h2 className="documents__title">Сведения об автошколе «За рулём»</h2>

				<div className="documents__list">
					{questionsData.map((item, index) => (
						<div
							key={item.id}
							className={`documents__item ${
								activeIndex === index ? "documents__item--active" : ""
							}`}
						>
							<div
								className="documents__header"
								onClick={() => toggleQuestion(index)}
							>
								<h3 className="documents__question">{item.question}</h3>
								<span className="documents__icon">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path
											d={
												activeIndex === index ? "M4 10H16" : "M4 10H16 M10 4V16"
											}
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</div>

							<div className="documents__content">
								<div className="documents__answer">
									{item.answer.map((line, lineIndex) =>
										item.id === 2 ? ( // Для пункта "Лицензия"
											<a
												key={lineIndex}
												href="/files/licenzy.pdf"
												download="Лицензия_автошколы_За_рулем.pdf"
												className="documents__answer-line documents__download-link"
											>
												{line}
											</a>
										) : (
											<div key={lineIndex} className="documents__answer-line">
												{line}
											</div>
										)
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Documents;
