import React from "react";

import IconCard from "./IconCard";

import styles from "../style/ProjectConfiguratorMain.module.sass";

function IconBar({ title, icons, type }) {
	return (
		<section className={styles.iconBar}>
			<p className={styles.heading}> {title}</p>
			<ul className={styles.iconList}>
				{icons.map((icon) => {
					return <IconCard icon={icon} type={type} key={icon.fullName} />;
				})}
			</ul>
		</section>
	);
}

export default IconBar;
