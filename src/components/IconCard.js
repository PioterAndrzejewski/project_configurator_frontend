import React, { useRef, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

import styles from "../style/ProjectConfiguratorMain.module.sass";

import { useProject } from "../context/projectContext";

function IconCard({ icon }) {
	const { id, fullName, icon: iconUrl } = icon;
	const { HOST } = useProject();
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive((current) => !current);
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
