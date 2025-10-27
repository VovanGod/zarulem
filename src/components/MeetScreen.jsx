import React from "react";
import MeetScreenSlider from "./Sliders/MeetScreenSlider";

const MeetScreen = () => {
	return (
		<section className="meetScreen">
			<div className="meetScreen__container">
				<h1 className="meetScreen__title">
					Лучшая автошкола Краснодарского края
				</h1>
				<MeetScreenSlider />
				<button className="meetScreen-btn">
					<a href="#contacts">Записаться на обучение</a>
				</button>
			</div>
		</section>
	);
};

export default MeetScreen;
