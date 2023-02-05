import React from "react";
import LogoHeader from "./LogoHeader";
import TypeSelector from "./TypeSelector";
import PriceBar from "./PriceBar";

import styles from "../style/ProjectConfiguratorAside.module.sass";

import { useRouter } from "../context/routerContext";

function ProjectConfiguratorAside() {
	const { screen } = useRouter();
	return (
		<section className={styles.aside}>
			<LogoHeader />
			<TypeSelector />
			<PriceBar />
		</section>
	);
}

export default ProjectConfiguratorAside;
