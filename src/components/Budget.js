import React from "react";
import {
	ChakraProvider,
	Input,
	InputLeftElement,
	InputGroup,
} from "@chakra-ui/react";

import { useProject } from "../context/projectContext";

import styles from "../style/ProjectConfiguratorMain.module.sass";

function Budget({ title }) {
	const { usedBudget, setUsedBudget } = useProject();

	const handleChange = (e) => {
		setUsedBudget(e.target.value.replace(/[^0-9]/g, ""));
	};
	return (
		<section className={styles.budget}>
			<ChakraProvider>
				<p className={styles.heading}> {title}</p>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children="$"
						className={styles.inputLeftElement}
					/>
					<Input
						type="tel"
						placeholder="budget"
						value={usedBudget}
						onChange={handleChange}
					/>
				</InputGroup>
			</ChakraProvider>
		</section>
	);
}

export default Budget;
