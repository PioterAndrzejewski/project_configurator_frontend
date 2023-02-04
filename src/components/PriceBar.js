import React from "react";
import { ChakraProvider, Spinner, Center } from "@chakra-ui/react";

import AppointmentButton from "./AppointmentButton.js";

import { useProject } from "../context/projectContext";

import styles from "../style/ProjectConfiguratorAside.module.sass";

function PriceBar() {
	const { price, priceError, loadingPrice } = useProject();

	return (
		<section className={styles.priceBar}>
			{loadingPrice && (
				<ChakraProvider>
					<Center>
						<Spinner color="white" size="lg" />
					</Center>
				</ChakraProvider>
			)}
			{price && (
				<>
					<div className={styles.priceText}>
						<h3 className={styles.priceHeading}>Estimated project price</h3>
						<p className={styles.priceValue}>
							$ <span>{price}</span>
						</p>
					</div>
					<AppointmentButton />
				</>
			)}
			{priceError && <p className={styles.priceBarDummy}>{priceError}</p>}
		</section>
	);
}

export default PriceBar;
