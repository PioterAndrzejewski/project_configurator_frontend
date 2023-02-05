import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext(undefined);

export const RouterProvider = ({ children }) => {
	const [screen, setScreen] = useState("home");

	const movePage = (destination) => {
		setScreen(destination);
	};

	return (
		<RouterContext.Provider
			value={{
				screen,
				movePage,
			}}
		>
			{children}
		</RouterContext.Provider>
	);
};

export const useRouter = () => useContext(RouterContext);
