import React, { useRef, useEffect } from "react";

import Slogan from "./Slogan";

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
					screen !== "home" ? styles.homeMoved : ""
				}`}
				onClick={handleClick}
			>
				<div className={styles.logoContainer}>
					<Slogan />
				</div>
				<h2 className={styles.slogan}>Press here to continue</h2>
			</section>
		</>
	);
}

export default Home;
