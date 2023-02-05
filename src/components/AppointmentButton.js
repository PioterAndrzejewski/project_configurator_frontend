import React from "react";

import { useRouter } from "../context/routerContext";

import styles from "../style/AppointmentButton.module.sass";

function AppointmentButton() {
	const { movePage } = useRouter();

	const handleButton = (e) => {
		e.preventDefault();
		movePage("contact");
	};
	return (
		<button className={styles.appointmentButton} onClick={handleButton}>
			Make an appointment
		</button>
	);
}

export default AppointmentButton;
