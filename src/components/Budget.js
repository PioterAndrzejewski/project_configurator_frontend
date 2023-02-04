import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { Input } from "@chakra-ui/react";

import styles from "../style/ProjectConfiguratorMain.module.sass";

function Budget({ title }) {
	return (
		<section className={styles.budget}>
			<ChakraProvider>
				<p className={styles.heading}> {title}</p>
				<Input type="tel" placeholder="budget" />
			</ChakraProvider>
		</section>
	);
}

export default Budget;
