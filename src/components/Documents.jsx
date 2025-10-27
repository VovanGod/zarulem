"use client";

import React, { useState } from "react";

const Documents = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const questionsData = [
		{
			id: 1,
			question: "Основные сведения",
			answer: [
				"Устав организации",
				"Свидетельство о регистрации",
				"Лицензия на образовательную деятельность",
				"Основные положения и регламенты",
			],
		},
		{
			id: 2,
			question: "Структура и органы управления",
			answer: [
				"Положение о педагогическом составе",
				"Правила внутреннего трудового распорядка в автошколе «За рулем»",
				"Приказ о вступлении в должность директора Панковой А.А.",
				"Организационная структура управления",
			],
		},
		{
			id: 3,
			question: "Документы",
			answer: [
				"Правила приема учащихся",
				"Режим занятий обучающихся",
				"Отчет о результатах самообследования",
				"Документы по образовательной деятельности",
			],
		},
		{
			id: 4,
			question: "Образование",
			answer: [
				"Образовательные программы",
				"Учебный план",
				"Календарный учебный график",
				"Методические и оценочные материалы",
			],
		},
		{
			id: 5,
			question: "Руководство. Педагогический состав",
			answer: [
				"Руководящий состав организации",
				"Персональный состав педагогических работников",
				"Квалификация преподавательского состава",
				"Информация о повышении квалификации",
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
									{item.answer.map((line, lineIndex) => (
										<div key={lineIndex} className="documents__answer-line">
											{line}
										</div>
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

export default Documents;
