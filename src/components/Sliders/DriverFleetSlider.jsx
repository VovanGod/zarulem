"use client";

import { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DriverFleetSlider = () => {
	const [SliderComponent, setSliderComponent] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef(null);

	useEffect(() => {
		import("react-slick").then((module) => {
			setSliderComponent(() => module.default);
		});
	}, []);

	// Полные настройки слайдера
	const settings = {
		dots: false,
		infinite: false,
		speed: 1200,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
		autoplay: false,
		pauseOnHover: true,
		arrows: false,
		swipe: true,
		touchMove: true,
		draggable: true,
		adaptiveHeight: false,
		centerMode: false,
		afterChange: (current) => setCurrentSlide(current),
	};

	const slides = [
		{
			id: 1,
			image: "/icons/drivers/driver1.png",
			brand: "Фазылов Михаил",
			alt: "Фазылов Михаил",
		},
		{
			id: 2,
			image: "/icons/drivers/driver2.png",
			brand: "Халанский Виктор",
			alt: "Халанский Виктор",
		},
		{
			id: 3,
			image: "/icons/drivers/driver3.png",
			brand: "Гладков Алексей",
			alt: "Гладков Алексей",
		},
		{
			id: 4,
			image: "/icons/drivers/driver4.png",
			brand: "Головко Юрий",
			alt: "Головко Юрий",
		},
		{
			id: 5,
			image: "/icons/drivers/driver5.png",
			brand: "Мамонов Дмитрий",
			alt: "Мамонов Дмитрий",
		},
		{
			id: 6,
			image: "/icons/drivers/driver6.png",
			brand: "Катаев Андрей",
			alt: "Катаев Андрей",
		},
		{
			id: 7,
			image: "/icons/drivers/driver7.png",
			brand: "Донцов Сергей",
			alt: "Донцов Сергей",
		},
	];

	// Вычисляем максимальный слайд
	const maxSlide = slides.length - settings.slidesToShow;

	const nextSlide = () => {
		if (sliderRef.current && currentSlide < maxSlide) {
			sliderRef.current.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current && currentSlide > 0) {
			sliderRef.current.slickPrev();
		}
	};

	// Проверяем, нужно ли показывать стрелки
	const showPrevArrow = currentSlide > 0;
	const showNextArrow = currentSlide < maxSlide;

	if (!SliderComponent) {
		return (
			<div className="driverFleet__slider">
				<div className="driverFleet__slider-slide">
					<img src={slides[0].image} alt={slides[0].alt} />
					<h3>{slides[0].brand}</h3>
				</div>
				<div className="driverFleet__slider-btns">
					<button onClick={prevSlide} className="control-btn control-prev">
						<img src="/icons/man.svg" alt="Previous" />
					</button>
					<button onClick={nextSlide} className="control-btn control-next">
						<img src="/icons/woman.svg" alt="Next" />
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="driverFleet__slider">
			<button
				onClick={prevSlide}
				className={`control-btn control-prev ${!showPrevArrow ? "hidden" : ""}`}
			>
				<i className="arrow left"></i>
			</button>

			<SliderComponent ref={sliderRef} {...settings}>
				{slides.map((slide) => (
					<div key={slide.id} className="driverFleet__slider-slide">
						<img src={slide.image} alt={slide.alt} />
						<div className="mark">
							<h3>{slide.brand}</h3>
						</div>
					</div>
				))}
			</SliderComponent>

			<button
				onClick={nextSlide}
				className={`control-btn control-next ${!showNextArrow ? "hidden" : ""}`}
			>
				<i className="arrow right"></i>
			</button>
		</div>
	);
};

export default DriverFleetSlider;
