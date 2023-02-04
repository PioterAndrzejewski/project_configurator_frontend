import React from "react";

import styles from "../style/ProjectConfiguratorAside.module.sass";

import { useProject } from "../context/projectContext";

function BuildingTypeCard({ type }) {
	const { id, fullName, icon } = type;
	const { HOST, changeUsedType, usedType } = useProject();

	const isActive = usedType === id;

	const handleClick = () => {
		changeUsedType(id);
	};

	return (
		<li
			className={`${styles.typeItem} ${isActive ? styles.typeItemActive : ""}`}
			onClick={handleClick}
		>
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
