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
					from the backend repository.
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
