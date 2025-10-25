"use client";

import { useState } from "react";

const MeetScreenSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		<div className="meetScreen__slider-slide" key={1}>
			<img src="/icons/manDriver.svg" alt="picture of a car" />
		</div>,
		<div className="meetScreen__slider-slide" key={2}>
			<img src="/icons/womanDriver.svg" alt="picture of a car" />
		</div>,
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	return (
		<div className="meetScreen__slider">
			{slides[currentSlide]}

			<div className="meetScreen__slider-btns">
				<button onClick={prevSlide}>
					<img src="/icons/woman.svg" alt="" />
				</button>
				<button onClick={nextSlide}>
					<img src="/icons/man.svg" alt="" />
				</button>
			</div>
		</div>
	);
};

export default MeetScreenSlider;
