import CarFleet from "@/components/CarFleet";
import Contacts from "@/components/Contacts";
import DriverFleet from "@/components/DriverFleet";
import Faq from "@/components/Faq";
import Information from "@/components/Information";
import Map from "@/components/Map";
import MeetScreen from "@/components/MeetScreen";
import Documents from "@/components/Documents";

export default function Home() {
	return (
		<>
			<MeetScreen />
			<CarFleet />
			<DriverFleet />
			<Information />
			<Faq />
			<Contacts />
			<Map />
			<Documents />
		</>
	);
}
