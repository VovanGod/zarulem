import React from "react";
import CarFleetSlider from "./Sliders/CarFleetSlider";

const CarFleet = () => {
	return (
		<section className="carFleet" id="carFleet">
			<h2 className="carFleet__title">
				<a href="/" className="carFleet__logo">
					<img src="/icons/logo.svg" alt="логотип компании" />
					<div className="carFleet__logo-name">
						За рулём <span> — современный автопарк</span>
					</div>
				</a>
			</h2>

			<p className="carFleet__subtitle">
				Только в нашей школе вы можете выбрать, на каком автомобиле проходить
				обучение.
			</p>

			<CarFleetSlider />
		</section>
	);
};

export default CarFleet;
