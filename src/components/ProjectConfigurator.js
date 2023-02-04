import React, { useEffect } from "react";

import ProjectConfiguratorMain from "./ProjectConfiguratorMain";
import ProjectVisualisation from "./ProjectVisualisation";
import ProjectConfiguratorAside from "./ProjectConfiguratorAside";
import Home from "./Home";

import axios from "axios";

import { useProject } from "../context/projectContext";
import { useRouter } from "../context/routerContext";

import styles from "../style/ProjectConfigurator.module.sass";

function ProjectConfigurator() {
	const { dataLoaded, updateProject, HOST } = useProject();
	const { screen } = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.post(`${HOST}/gettypes`);
			updateProject(response.data);
		};
		if (!dataLoaded) fetchData();
	}, []);

	return (
		<main className={styles.configurator}>
			<Home />
			<ProjectConfiguratorMain />
			<ProjectVisualisation />
			<ProjectConfiguratorAside />
		</main>
	);
}

export default ProjectConfigurator;
