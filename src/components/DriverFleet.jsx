import React from "react";
import DriverFleetSlider from "./Sliders/DriverFleetSlider";

const DriverFleet = () => {
	return (
		<section className="driverFleet" id="driverFleet">
			<h2 className="driverFleet__title">
				<a href="/" className="driverFleet__logo">
					<img src="/icons/logo.svg" alt="логотип компании" />
					<div className="driverFleet__logo-name">
						За рулём <span> — профессиональный коллектив</span>
					</div>
				</a>
			</h2>

			<p className="driverFleet__subtitle">
				Опытные инструкторы всегда помогут в сложной дорожной ситуации.
			</p>

			<ul className="driverFleet__advantages">
				<li>
					<img src="/icons/tick.svg" alt="tick" />
					Огромный опыт
				</li>
				<li>
					<img src="/icons/tick.svg" alt="tick" />
					Индивидуальный подход
				</li>
			</ul>

			<DriverFleetSlider />
		</section>
	);
};

export default DriverFleet;
