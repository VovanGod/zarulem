"use client";

import React, { useState, useEffect } from "react";

const Loading = ({ isLoading }) => {
	const [shouldRender, setShouldRender] = useState(isLoading);
	const [isHiding, setIsHiding] = useState(false);

	useEffect(() => {
		if (isLoading) {
			setShouldRender(true);
			setIsHiding(false);
		} else {
			setIsHiding(true);
			const timer = setTimeout(() => {
				setShouldRender(false);
			}, 400);

			return () => clearTimeout(timer);
		}
	}, [isLoading]);

	if (!shouldRender) return null;

	return (
		<div className={`loading ${isHiding ? "loading--hidden" : ""}`}>
			<div className="loading__container">
				{/* Логотип */}
				<div className="loading__logo">
					<div className="loading__logo-icon">
						<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
							<circle
								cx="40"
								cy="40"
								r="35"
								stroke="#FFFD29"
								strokeWidth="3"
								fill="none"
							/>
							<circle
								cx="40"
								cy="40"
								r="20"
								stroke="#FFFD29"
								strokeWidth="2"
								fill="none"
							/>
							<line
								x1="40"
								y1="15"
								x2="40"
								y2="25"
								stroke="#FFFD29"
								strokeWidth="2"
							/>
							<line
								x1="40"
								y1="55"
								x2="40"
								y2="65"
								stroke="#FFFD29"
								strokeWidth="2"
							/>
							<line
								x1="15"
								y1="40"
								x2="25"
								y2="40"
								stroke="#FFFD29"
								strokeWidth="2"
							/>
							<line
								x1="55"
								y1="40"
								x2="65"
								y2="40"
								stroke="#FFFD29"
								strokeWidth="2"
							/>
						</svg>
					</div>
					<div className="loading__logo-text">За рулём</div>
				</div>

				{/* Индикатор загрузки */}
				<div className="loading__progress">
					<div className="loading__progress-bar">
						<div className="loading__progress-fill"></div>
					</div>
					<div className="loading__text">
						{isHiding ? "Готово!" : "Загружаем лучшую автошколу Краснодара..."}
					</div>
				</div>

				{/* Дополнительная информация */}
				<div className="loading__info">
					<div className="loading__contact">
						<span>📞 8 (918) 04-40-777</span>
					</div>
					<div className="loading__address">
						<span>📍 Краснодар, проезд Плановый 9</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
