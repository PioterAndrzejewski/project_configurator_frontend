import React, { useRef, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

import styles from "../style/ProjectConfiguratorMain.module.sass";

import { useProject } from "../context/projectContext";

function IconCard({ icon, type }) {
	const { id, fullName, icon: iconUrl } = icon;
	const { HOST, changeUsedScope, changeUsedAddons } = useProject();
	const isActive = useProject()[type][id];

	const handleClick = () => {
		if (type === "usedScope") {
			changeUsedScope(id);
			return;
		}
		changeUsedAddons(id);
	};

	return (
		<ChakraProvider>
			<Tooltip label={fullName} aria-label="A tooltip" bg="#474F79">
				<li
					className={`${styles.iconItem} ${isActive && styles.active}`}
					onClick={handleClick}
				>
					<img
						className={`${styles.iconImage}`}
						src={`${HOST}/phaseaddonimage/${iconUrl}`}
						alt={`project addon icon`}
					></img>
				</li>
			</Tooltip>
		</ChakraProvider>
	);
}

export default IconCard;
