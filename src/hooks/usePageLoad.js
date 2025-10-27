"use client";

import { useState, useEffect } from "react";

export const usePageLoad = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let progressValue = 0;

		const interval = setInterval(() => {
			progressValue += Math.random() * 15;
			if (progressValue >= 100) {
				progressValue = 100;
				clearInterval(interval);

				// Ждем полной загрузки страницы
				if (document.readyState === "complete") {
					setIsLoading(false);
				} else {
					window.addEventListener("load", () => setIsLoading(false));
				}
			}
			setProgress(progressValue);
		}, 200);

		return () => clearInterval(interval);
	}, []);

	return { isLoading, progress };
};
