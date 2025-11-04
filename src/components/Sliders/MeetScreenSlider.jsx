"use client";

import { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MeetScreenSlider = () => {
	const [SliderComponent, setSliderComponent] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef(null);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		import("react-slick").then((module) => {
			setSliderComponent(() => module.default);
		});

		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const settings = {
		dots: false,
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
		afterChange: (current) => setCurrentSlide(current),
	};

	const slides = [
		{
			id: 1,
			image: "/icons/manDriver.svg",
			alt: "Man driving car",
		},
		{
			id: 2,
			image: "/icons/womanDriver.svg",
			alt: "Woman driving car",
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

	// Проверяем, активна ли кнопка
	const isPrevActive = currentSlide > 0;
	const isNextActive = currentSlide < slides.length - 1;

	if (!SliderComponent) {
		return (
			<div className="meetScreen__slider">
				<div className="meetScreen__slider-slide">
					<img src="/icons/manDriver.svg" alt="Man driving car" />
				</div>
				<div className="meetScreen__slider-btns">
					<button
						onClick={prevSlide}
						className={`control-btn control-prev ${
							isPrevActive ? "active" : ""
						}`}
						aria-label="Предыдущий слайд"
					>
						<img aria-hidden={true} src="/icons/man.svg" alt="Previous" />
					</button>
					<button
						onClick={nextSlide}
						className={`control-btn control-next ${
							isNextActive ? "active" : ""
						}`}
						aria-label="Следующий слайд"
					>
						<img aria-hidden={true} src="/icons/woman.svg" alt="Next" />
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="meetScreen__slider">
			<SliderComponent ref={sliderRef} {...settings}>
				{slides.map((slide) => (
					<div key={slide.id} className="meetScreen__slider-slide">
						<img src={slide.image} alt={slide.alt} />
					</div>
				))}
			</SliderComponent>

			<div className="meetScreen__slider-btns">
				<button
					onClick={prevSlide}
					className={`control-btn control-prev ${isPrevActive ? "active" : ""}`}
					disabled={!isPrevActive}
					aria-label="Предыдущий слайд"
				>
					<img aria-hidden={true} src="/icons/man.svg" alt="Previous" />
				</button>
				<button
					onClick={nextSlide}
					className={`control-btn control-next ${isNextActive ? "active" : ""}`}
					disabled={!isNextActive}
					aria-label="Следующий слайд"
				>
					<img aria-hidden={true} src="/icons/woman.svg" alt="Next" />
				</button>
			</div>
		</div>
	);
};

export default MeetScreenSlider;
