import React from "react";

import logo from "../assets/img/logo.png";

import styles from "../style/ProjectConfiguratorAside.module.sass";

function LogoHeader() {
	return (
		<section className={styles.logoHeader}>
			<img src={logo} alt="Logo" className={styles.logo} />
			<h1 className={styles.logoText}>Project configurator</h1>
		</section>
	);
}

export default LogoHeader;
