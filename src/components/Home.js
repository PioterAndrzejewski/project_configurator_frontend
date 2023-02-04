import React from "react";

import logo from "../assets/img/logo.png";

import { useRouter } from "../context/routerContext";

import styles from "../style/Home.module.sass";

function Home() {
	const { screen, movePage } = useRouter();

	const handleClick = () => {
		movePage("pricing");
	};

	return (
		<>
			<section
				className={`${styles.home} ${
					screen === "pricing" ? styles.homeMoved : ""
				}`}
				onClick={handleClick}
			>
				<div className={styles.logoContainer}>
					<img src={logo} alt="Logo" className={styles.logo} />
					<h1 className={styles.logoText}>Project configurator</h1>
				</div>
				<h2 className={styles.slogan}>Press anywhere to continue</h2>
			</section>
		</>
	);
}

export default Home;
