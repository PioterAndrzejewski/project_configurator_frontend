import { createContext, useContext, useState } from "react";

const ProjectContext = createContext(undefined);

export const ProjectProvider = ({ children }) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [projectTypes, setProjectTypes] = useState([]);
	const [projectAddons, setProjectAddons] = useState([]);
	const [projectPhases, setProjectPhases] = useState([]);

	const [usedType, setUsedType] = useState(undefined);
	const [usedScope, setUsedScope] = useState(undefined);
	const [usedAddons, setUsedAddons] = useState(undefined);
	const [usedBudget, setUsedBudget] = useState(undefined);

	const HOST = "http://127.0.0.1:3636";

	const updateProject = ({ projectTypes, projectPhases, projectAddons }) => {
		setProjectTypes(projectTypes);
		setProjectPhases(projectPhases);
		setProjectAddons(projectAddons);
	};

	return (
		<ProjectContext.Provider
			value={{
				dataLoaded,
				projectTypes,
				projectAddons,
				projectPhases,
				updateProject,
				usedType,
				setUsedType,
				usedScope,
				setUsedScope,
				usedAddons,
				setUsedAddons,
				usedBudget,
				setUsedBudget,
				HOST,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProject = () => useContext(ProjectContext);
