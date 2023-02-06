import React, { useEffect } from "react";

import ProjectConfiguratorMain from "./ProjectConfiguratorMain";
import ProjectVisualisation from "./ProjectVisualisation";
import ProjectConfiguratorAside from "./ProjectConfiguratorAside";
import Home from "./Home";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import MessageDelivered from "./MessageDelivered";

import axios from "axios";

import { useProject } from "../context/projectContext";
import { useRouter } from "../context/routerContext";

import styles from "../style/ProjectConfigurator.module.sass";

function ProjectConfigurator() {
	const { dataLoaded, updateProject, HOST } = useProject();
	const { connectionError, openErrorMessage, messageDelivered } = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.post(`${HOST}/gettypes`);
				updateProject(response.data);
				openErrorMessage(false);
			} catch (e) {
				openErrorMessage(true);
				setTimeout(fetchData, 1000 * 10);
			}
		};
		if (!dataLoaded) fetchData();
	}, []);

	return (
		<main className={styles.configurator}>
			{connectionError && <ErrorPage />}
			{messageDelivered && <MessageDelivered />}
			<Home />
			<ProjectConfiguratorMain />
			<ProjectVisualisation />
			<ProjectConfiguratorAside />
			<Contact />
		</main>
	);
}

export default ProjectConfigurator;
