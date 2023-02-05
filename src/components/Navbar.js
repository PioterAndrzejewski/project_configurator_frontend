import React from "react";

import styles from "../style/ProjectConfiguratorMain.module.sass";

import { useRouter } from "../context/routerContext";

const NAVBAR_LINKS = [
	{
		title: "Home",
		to: "home",
	},
	{
		title: "Pricing",
		to: "pricing",
	},
	{
		title: "Contact",
		to: "contact",
	},
];

function Navbar() {
	const { movePage, screen } = useRouter();
	return (
		<nav className={styles.navbar}>
			<ul className={styles.list}>
				{NAVBAR_LINKS.map((link) => {
					return (
						<li
							className={`${styles.item} ${
								screen === "pricing" ? styles.itemLigh : styles.itemDark
							}`}
							key={link.title}
						>
							<p
								className={`${styles.itemText} ${
									screen !== "pricing" ? styles.itemTextLight : ""
								}`}
								onClick={() => {
									movePage(link.to);
								}}
							>
								{link.title}
							</p>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
