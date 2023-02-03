import React from "react";

import styles from "../style/Navbar.module.sass";

function Navbar() {
	return (
		<>
			<h1 className={styles.h1}>This is my navbar</h1>
			<ul>
				<li>Pierwszy</li>
				<li>Drugi</li>
				<li>Trzeci</li>
			</ul>
		</>
	);
}

export default Navbar;
