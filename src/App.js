import React from "react";

import ProjectConfigurator from "./components/ProjectConfigurator";

import styles from "./style/App.module.sass";

import { ProjectProvider } from "./context/projectContext";

function App() {
	return (
		<div className={styles.app}>
			<ProjectProvider>
				<ProjectConfigurator />
			</ProjectProvider>
		</div>
	);
}

export default App;
