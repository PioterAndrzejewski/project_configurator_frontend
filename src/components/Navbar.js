import React from "react";

import styles from "../style/ProjectConfiguratorMain.module.sass";

const NAVBAR_LINKS = [
	{
		title: "Home",
		to: "#",
	},
	{
		title: "Pricing",
		to: "#",
	},
	{
		title: "Contact",
		to: "#",
	},
];

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.list}>
				{NAVBAR_LINKS.map((link) => {
					return (
						<li className={styles.item} key={link.title}>
							<a className={styles.itemText}>{link.title}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
