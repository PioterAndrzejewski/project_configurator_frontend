import React, { useEffect } from "react";

import ProjectConfiguratorMain from "./ProjectConfiguratorMain";
import ProjectVisualisation from "./ProjectVisualisation";
import ProjectConfiguratorAside from "./ProjectConfiguratorAside";

import axios from "axios";

import { useProject } from "../context/projectContext";

import styles from "../style/ProjectConfigurator.module.sass";

function ProjectConfigurator() {
	const { dataLoaded, updateProject, HOST } = useProject();

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.post(`${HOST}/gettypes`);
			updateProject(response.data);
		};
		if (!dataLoaded) fetchData();
	}, []);

	return (
		<main className={styles.configurator}>
			<ProjectConfiguratorMain />
			<ProjectVisualisation />
			<ProjectConfiguratorAside />
		</main>
	);
}

export default ProjectConfigurator;
