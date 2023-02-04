import React from "react";

import AppointmentButton from "./AppointmentButton.js";

import styles from "../style/ProjectConfiguratorAside.module.sass";

function PriceBar() {
	return (
		<section className={styles.priceBar}>
			<div className={styles.priceText}>
				<h3 className={styles.priceHeading}>Estimated project price</h3>
				<p className={styles.priceValue}>
					$<span>8500</span>
				</p>
			</div>

			<AppointmentButton />
		</section>
	);
}

export default PriceBar;
