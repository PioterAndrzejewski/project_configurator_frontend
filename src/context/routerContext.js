import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext(undefined);

export const RouterProvider = ({ children }) => {
	const [screen, setScreen] = useState("home");
	const [connectionError, setConnectionError] = useState(false);
	const [messageDelivered, setMessageDelivered] = useState(false);
	const [isMessageDeliveryError, setIsMessageDeliveryError] = useState(false);
	const [isDelivering, setIsDelivering] = useState(false);

	const openErrorMessage = (flag) => {
		setConnectionError(flag);
	};

	const movePage = (destination) => {
		setScreen(destination);
	};

	const changeToMessageDeliveredScreen = () => {
		setMessageDelivered(true);
	};

	const openMessageDeliveryError = (flag) => {
		setIsMessageDeliveryError(true);
	};

	return (
		<RouterContext.Provider
			value={{
				screen,
				movePage,
				connectionError,
				openErrorMessage,
				messageDelivered,
				changeToMessageDeliveredScreen,
				openMessageDeliveryError,
				isMessageDeliveryError,
				isDelivering,
				setIsDelivering,
			}}
		>
			{children}
		</RouterContext.Provider>
	);
};

export const useRouter = () => useContext(RouterContext);
