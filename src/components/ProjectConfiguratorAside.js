import React from "react";
import LogoHeader from "./LogoHeader";
import TypeSelector from "./TypeSelector";
import PriceBar from "./PriceBar";

import styles from "../style/ProjectConfiguratorAside.module.sass";

function ProjectConfiguratorAside() {
	return (
		<section className={styles.aside}>
			<LogoHeader />
			<TypeSelector />
			<PriceBar />
		</section>
	);
}

export default ProjectConfiguratorAside;
