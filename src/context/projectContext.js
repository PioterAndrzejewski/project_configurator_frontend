import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { RepeatOneSharp } from "@mui/icons-material";

const ProjectContext = createContext(undefined);

export const ProjectProvider = ({ children }) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [projectTypes, setProjectTypes] = useState([]);
	const [projectAddons, setProjectAddons] = useState([]);
	const [projectPhases, setProjectPhases] = useState([]);
	const [price, setPrice] = useState(undefined);
	const [imageURL, setImageURL] = useState("dummy.png");

	const [usedType, setUsedType] = useState(undefined);
	const [usedScope, setUsedScope] = useState([false, false, false, false]);
	const [usedAddons, setUsedAddons] = useState([false, false, false, false]);
	const [usedBudget, setUsedBudget] = useState("");

	const [priceError, setPriceError] = useState(undefined);
	const [loadingPrice, setLoadingPrice] = useState(false);

	const HOST = "http://127.0.0.1:3636";

	useEffect(() => {
		const fetchProjectPrice = async () => {
			setLoadingPrice(true);
			setPriceError(undefined);
			setPrice(undefined);
			const response = await axios.post(`${HOST}/projectprice`, {
				usedType,
				usedScope,
				usedAddons,
				usedBudget,
			});
			if (!response.data.success) {
				setLoadingPrice(false);
				setPrice(undefined);
				setPriceError(response.data.message);
				return;
			}

			if (response.data.success) {
				setLoadingPrice(false);
				setPriceError("");
				setPrice(response.data.price);
			}

			return;
		};

		if (usedBudget === "") {
			setPrice(undefined);
			setPriceError("Please specify estimated construction budget");
			return;
		}
		if (usedType === undefined) {
			setPrice(undefined);
			setPriceError("Please specify Building Type");
			return;
		}
		if (usedScope.findIndex((scope) => scope === true) === -1) {
			setPrice(undefined);
			setPriceError("Please specify Project Scope");
			return;
		}

		fetchProjectPrice();
	}, [usedType, usedScope, usedAddons, usedBudget]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.post(`${HOST}/projectimage`, {
				usedType,
				usedScope,
			});
			setImageURL(response.data.imageURL);
		};
		fetchData();
	}, [usedType, usedScope, usedAddons, usedBudget]);

	const updateProject = ({ projectTypes, projectPhases, projectAddons }) => {
		setProjectTypes(projectTypes);
		setProjectPhases(projectPhases);
		setProjectAddons(projectAddons);
	};

	const changeUsedType = (id) => {
		setUsedType((prevId) => {
			if (prevId === id) {
				return undefined;
			}
			return id;
		});
	};

	const changeUsedScope = (id) => {
		setUsedScope((prevState) => {
			const newState = [...prevState];
			if (prevState[3] === true) {
				newState[0] = false;
				newState[1] = false;
				newState[2] = false;
				newState[3] = false;
			}
			newState[id] = !prevState[id];
			if (
				newState[0] === true &&
				newState[1] === true &&
				newState[2] === true
			) {
				newState[0] = false;
				newState[1] = false;
				newState[2] = false;
				newState[3] = true;
			}

			if (newState[3] === true) {
				newState[0] = false;
				newState[1] = false;
				newState[2] = false;
			}
			return newState;
		});
	};

	const changeUsedAddons = (id) => {
		setUsedAddons((prevState) => {
			const newState = [...prevState];
			newState[id] = !prevState[id];
			return newState;
		});
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
				changeUsedType,
				changeUsedScope,
				changeUsedAddons,
				price,
				imageURL,
				HOST,
				priceError,
				loadingPrice,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProject = () => useContext(ProjectContext);
