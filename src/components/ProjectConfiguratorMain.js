import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";

import { useProject } from "../context/projectContext";
import { useRouter } from "../context/routerContext";

import Navbar from "./Navbar";
import Budget from "./Budget.js";
import IconBar from "./IconBar.js";

import styles from "../style/ProjectConfiguratorMain.module.sass";

function ProjectConfiguratorMain() {
	const { projectPhases, projectAddons } = useProject();
	const { screen } = useRouter();

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
			<footer
				className={`${styles.footer} ${
					screen === "pricing" ? styles.footerDark : styles.footerLight
				}`}
			>
				Created by Piotr Andrzejewski <GitHubIcon sx={{ marginLeft: "30px" }} />{" "}
				<a
					href="https://github.com/PioterAndrzejewski/project_configurator_frontend"
					className={styles.footerLink}
				>
					FE
				</a>{" "}
				<a
					href="https://github.com/PioterAndrzejewski/project_configurator_backend"
					className={styles.footerLink}
				>
					BE
				</a>
			</footer>
		</section>
	);
}

export default ProjectConfiguratorMain;
