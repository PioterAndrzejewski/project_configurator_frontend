import React from "react";

import styles from "../style/ProjectVisualisation.module.sass";

import { useProject } from "../context/projectContext";

function ProjectVisualisation() {
	const { imageURL, HOST } = useProject();
	return (
		<section className={styles.visualisation}>
			<img
				src={`${HOST}/projectimage/${imageURL}`}
				alt="Project visualisation"
				className={styles.visualisationImageShadow}
			/>
			<img
				src={`${HOST}/projectimage/${imageURL}`}
				alt="Project visualisation"
				className={styles.visualisationImage}
			/>
		</section>
	);
}

export default ProjectVisualisation;
