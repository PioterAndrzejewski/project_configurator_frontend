import React from "react";

import IconCard from "./IconCard";

import styles from "../style/ProjectConfiguratorMain.module.sass";

function IconBar({ title, icons }) {
	console.log(icons);

	return (
		<section className={styles.iconBar}>
			<p className={styles.heading}> {title}</p>
			<ul className={styles.iconList}>
				{icons.map((icon) => {
					return <IconCard icon={icon} />;
				})}
			</ul>
		</section>
	);
}

export default IconBar;
