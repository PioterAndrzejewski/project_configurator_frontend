import React from "react";

import AppointmentButton from "./AppointmentButton.js";

import { useProject } from "../context/projectContext";

import styles from "../style/ProjectConfiguratorAside.module.sass";

function PriceBar() {
	const { price } = useProject();
	console.log({ price });
	const isPrice = !(price === undefined);
	return (
		<section className={styles.priceBar}>
			{isPrice ? (
				<>
					<div className={styles.priceText}>
						<h3 className={styles.priceHeading}>Estimated project price</h3>
						<p className={styles.priceValue}>
							$<span>{price}</span>
						</p>
					</div>
					<AppointmentButton />
				</>
			) : (
				<p className={styles.priceBarDummy}>
					Specify type, budget and scope to see the price here
				</p>
			)}
		</section>
	);
}

export default PriceBar;
