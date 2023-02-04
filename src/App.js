import React from "react";

import ProjectConfigurator from "./components/ProjectConfigurator";

import styles from "./style/App.module.sass";

import { ProjectProvider } from "./context/projectContext";
import { RouterProvider } from "./context/routerContext";

function App() {
	return (
		<div className={styles.app}>
			<ProjectProvider>
				<RouterProvider>
					<ProjectConfigurator />
				</RouterProvider>
			</ProjectProvider>
		</div>
	);
}

export default App;
