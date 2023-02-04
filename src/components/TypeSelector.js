import React from "react";

import BuildingTypeCard from "./BuildingTypeCard";

import { useProject } from "../context/projectContext";

import styles from "../style/ProjectConfiguratorAside.module.sass";

function TypeSelector() {
	const { projectTypes } = useProject();

	return (
		<section className={styles.typeSelector}>
			<h2 className={styles.heading}>Building type</h2>
			<ul className={styles.typesList}>
				{projectTypes.map((type) => {
					return <BuildingTypeCard type={type} key={type.fullName} />;
				})}
			</ul>
		</section>
	);
}

export default TypeSelector;
