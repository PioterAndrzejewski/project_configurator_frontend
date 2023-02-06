import React, { useRef, useEffect } from "react";

import { useRouter } from "../context/routerContext";

import styles from "../style/ErrorPage.module.sass";

function ErrorPage() {
	const { screen, connectionError } = useRouter();

	return (
		<>
			<section className={styles.errorPage}>
				<h1 className={styles.heading}>
					Message has been delivered - we will contact you soon
				</h1>
				<h2 className={styles.slogan}>
					A copy of the message has been sent to the above e-mail address. There
					are also instructions for correcting the submitted query.
				</h2>
				<h3 className={styles.sloganSmall}>
					This is a test message - the backend doesn't save or send messages.
				</h3>
			</section>
		</>
	);
}

export default ErrorPage;
