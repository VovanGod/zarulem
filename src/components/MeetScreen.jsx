import React from "react";
import MeetScreenSlider from "./Sliders/MeetScreenSlider";

const MeetScreen = () => {
	return (
		<section className="meetScreen">
			<h1> Лучшая автошкола Краснодарского края</h1>
			<MeetScreenSlider />
			<button className="meetScreen-btn"> Записаться на обучение</button>
		</section>
	);
};

export default MeetScreen;
