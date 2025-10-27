"use client";

import { PT_Sans } from "next/font/google";
import "./../styles/main.scss";
import Header from "@/components/Header/Header";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

const ptSans = PT_Sans({
	variable: "--font-main",
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	display: "swap",
	preload: true,
});

export default function RootLayout({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const [isContentVisible, setIsContentVisible] = useState(false);

	useEffect(() => {
		// Симуляция загрузки всех ресурсов
		const timer = setTimeout(() => {
			setIsLoading(false);

			// Показываем контент после небольшой задержки для плавности
			setTimeout(() => {
				setIsContentVisible(true);
			}, 300);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<html lang="ru" className={ptSans.variable}>
			<head>
				<link rel="preconnect" href="https://mc.yandex.ru" />
				<link rel="dns-prefetch" href="https://mc.yandex.ru" />
				<link
					rel="preload"
					href="/icons/logo.svg"
					as="image"
					type="image/svg+xml"
				/>
				<link
					rel="preload"
					href="/icons/manDriver.svg"
					as="image"
					type="image/svg+xml"
				/>
				<link rel="canonical" href="https://зарулем23.рф" />
				<link rel="icon" href="/favicon.ico" />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "DrivingSchool",
							name: "Автошкола «За рулём»",
							description:
								"Автошкола в Краснодаре. Обучение на права категорий А и В. Категория А - 25 000 рублей, категория В - 48 000 рублей.",
							url: "https://зарулем23.рф",
							telephone: "+7-918-044-07-77",
							address: {
								"@type": "PostalAddress",
								streetAddress: "проезд Плановый, 9, 3 этаж",
								addressLocality: "Краснодар",
								postalCode: "350000",
								addressCountry: "RU",
								addressRegion: "Краснодарский край",
							},
							openingHours: ["Пн-Чт 10:00-19:00", "Пт 10:00-18:00"],
							priceRange: "₽₽",
							areaServed: "Краснодар и Краснодарский край",
						}),
					}}
				/>
			</head>
			<body>
				<Loading isLoading={isLoading} />

				<div
					className={isContentVisible ? "content-fade-in" : ""}
					style={{ opacity: isContentVisible ? 1 : 0 }}
				>
					<Header />
					<main>{children}</main>
				</div>
			</body>
		</html>
	);
}
