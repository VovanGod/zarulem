"use client";
import React, { useState, useEffect } from "react";

const Map = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	return (
		<div className="map-container">
			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A00f79ba3746d6759b66f54633e50663af01d0560e34d289c1f54c2ef392a0300&amp;source=constructor"
				width="100%"
				height={isMobile ? "300" : "500"}
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				title="Карта расположения автошколы За рулём"
				className="map-iframe"
			/>
		</div>
	);
};

export default Map;
