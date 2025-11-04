"use client";

import { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarFleetSlider = () => {
	const [SliderComponent, setSliderComponent] = useState(null);
	const sliderRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Проверяем мобильное устройство
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		// Динамический импорт слайдера
		import("react-slick").then((module) => {
			setSliderComponent(() => module.default);
		});

		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	// Настройки слайдера для разных устройств
	const settings = {
		dots: true,
		infinite: false,
		speed: isMobile ? 800 : 1200,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
		autoplay: false,
		pauseOnHover: !isMobile,
		arrows: false,
		swipe: true,
		touchMove: true,
		draggable: true,
		adaptiveHeight: true,
		centerMode: false,
		touchThreshold: isMobile ? 10 : 5,
		swipeToSlide: true,
	};

	const slides = [
		{
			id: 1,
			image: "/icons/cars/ford.svg",
			brand: "Chevrolet Cruze",
			alt: "Chevrolet Cruze",
			logo: "/icons/cars/chevroletLogo.svg",
		},
		{
			id: 2,
			image: "/icons/cars/focus.svg",
			brand: "Ford Focus",
			alt: "Ford Focus",
			logo: "/icons/cars/fordLogo.svg",
		},
		{
			id: 3,
			image: "/icons/cars/cherry.svg",
			brand: "Chery SUV T11",
			alt: "Chery SUV T11",
			logo: "/icons/cars/cheryLogo.svg",
		},
		{
			id: 4,
			image: "/icons/cars/kalina.svg",
			brand: "Лада Калина",
			alt: "Лада Калина",
			logo: "/icons/cars/ladaLogo.svg",
		},
		{
			id: 5,
			image: "/icons/cars/vaz2115.svg",
			brand: "ВАЗ 2115",
			alt: "ВАЗ 2115",
			logo: "/icons/cars/ladaLogo.svg",
		},
		{
			id: 6,
			image: "/icons/cars/vaz2114.svg",
			brand: "ВАЗ 2114",
			alt: "ВАЗ 2114",
			logo: "/icons/cars/ladaLogo.svg",
		},
		{
			id: 7,
			image: "/icons/cars/vaz2110.svg",
			brand: "ВАЗ 2110",
			alt: "ВАЗ 2110",
			logo: "/icons/cars/ladaLogo.svg",
		},
		{
			id: 8,
			image: "/icons/cars/tachilla.svg",
			brand: "Tachilla Space 200",
			alt: "Tachilla Space 200",
		},
		{
			id: 9,
			image: "/icons/cars/stels.svg",
			brand: "Stels Flex 250",
			alt: "Stels Flex 250",
		},
	];

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	if (!SliderComponent) {
		return (
			<div className="carFleet__slider">
				<div className="carFleet__slider-slide">
					<div className="mark">
						<h3>{slides[0].brand}</h3>
						{slides[0].logo && <img src={slides[0].logo} alt={slides[0].alt} />}
					</div>
					<img src={slides[0].image} alt={slides[0].alt} className="img" />
				</div>
				<button onClick={prevSlide} className="control-btn control-prev">
					<i className="arrow left"></i>
				</button>
				<button onClick={nextSlide} className="control-btn control-next">
					<i className="arrow right"></i>
				</button>
			</div>
		);
	}

	return (
		<div className="carFleet__slider">
			<SliderComponent ref={sliderRef} {...settings}>
				{slides.map((slide) => (
					<div key={slide.id} className="carFleet__slider-slide">
						<div className="mark">
							{slide.logo && <img src={slide.logo} alt="" />}
							<h3>{slide.brand}</h3>
						</div>
						<img src={slide.image} alt={slide.alt} className="img" />
					</div>
				))}
			</SliderComponent>

			<button
				onClick={prevSlide}
				className="control-btn control-prev"
				aria-label="Предыдущий слайд"
			>
				<i aria-hidden="true" className="arrow left"></i>
			</button>
			<button
				onClick={nextSlide}
				className="control-btn control-next"
				aria-label="Следующий слайд"
			>
				<i aria-hidden="true" className="arrow right"></i>
			</button>
		</div>
	);
};

export default CarFleetSlider;
