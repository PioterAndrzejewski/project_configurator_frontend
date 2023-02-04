import React from "react";

import styles from "../style/ProjectConfiguratorAside.module.sass";

import { useProject } from "../context/projectContext";

function BuildingTypeCard({ type }) {
	const { id, fullName, icon } = type;
	const { HOST } = useProject();

	return (
		<li className={styles.typeItem}>
			<img
				className={styles.buildingTypeIcon}
				src={`${HOST}/typeimage/${icon}`}
				alt={`building type icon`}
			></img>
			<h3 className={styles.buildingTypeTitle}>{fullName}</h3>
		</li>
	);
}

export default BuildingTypeCard;
