import React from "react";

import { useProject } from "../context/projectContext";

import Navbar from "./Navbar";
import Budget from "./Budget.js";
import IconBar from "./IconBar.js";

import styles from "../style/ProjectConfiguratorMain.module.sass";

function ProjectConfiguratorMain() {
	const { projectPhases, projectAddons } = useProject();

	return (
		<section className={styles.main}>
			<Navbar />
			<div className={styles.projectDetails}>
				<Budget title="Estimated construction budget" />
				<IconBar
					title="Scope of the project"
					icons={projectPhases}
					type="usedScope"
				/>
				<IconBar
					title="Additions to the project"
					icons={projectAddons}
					type="usedAddons"
				/>
			</div>
			<footer className={styles.footer}>Created by Piotr Andrzejewski</footer>
		</section>
	);
}

export default ProjectConfiguratorMain;
