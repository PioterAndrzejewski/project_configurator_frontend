import React, { useRef, useEffect } from "react";

import styles from "../style/ErrorPage.module.sass";

function ErrorPage() {
	return (
		<>
			<section className={styles.errorPage}>
				<h1 className={styles.heading}>
					There was a problem connecting to the server.
				</h1>
				<h2 className={styles.slogan}>
					If you are testing the app locally, make sure you had run the server
					from the backend repository on port 3636.
				</h2>
				<h2 className={styles.slogan}>
					If you are testing remotely, wait a while to let the server wake up
					(about 30s). The app will try to connect automatically every 10s.
				</h2>
				<h3 className={styles.sloganSmall}>
					If it doesn't work, unfortunately the server must have gone down{" "}
					{`:(`} Anyway - the navbar looks good, doesn't it?
				</h3>
			</section>
		</>
	);
}

export default ErrorPage;
