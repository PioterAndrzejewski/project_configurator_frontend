import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { useRouter } from "../context/routerContext";
import { useProject } from "../context/projectContext";

import styles from "../style/Contact.module.sass";

function Summary() {
	const { screen, movePage } = useRouter();
	const {
		usedType,
		usedScope,
		usedAddons,
		usedBudget,
		projectTypes,
		projectAddons,
		projectPhases,
		price,
	} = useProject();

	const handleClick = () => {
		movePage("pricing");
	};
	return (
		<>
			<section className={styles.summary}>
				<h2 className={styles.summaryText}>Project information summary</h2>
				<div className={styles.summarySection}>
					{usedType === undefined ? (
						`Project type has not been specified`
					) : (
						<>
							<h4 className={styles.summarySectionHeading}>Project of:</h4>
							<h5 className={styles.summarySectionText}>
								- {projectTypes[usedType].fullName}
							</h5>
						</>
					)}
				</div>
				<div className={styles.summarySection}>
					{usedScope.findIndex((scope) => scope === true) === -1 ? (
						`Project scope has not been specified`
					) : (
						<>
							<h4 className={styles.summarySectionHeading}>Scope:</h4>
							<ul className={styles.summarySectionText}>
								{usedScope.map((scope, index) => {
									if (scope === true) {
										return (
											<li key={projectPhases[index].id}>
												- {projectPhases[index].fullName}
											</li>
										);
									}
								})}
							</ul>
						</>
					)}
				</div>
				<div className={styles.summarySection}>
					{usedAddons.findIndex((addon) => addon === true) === -1 ? (
						`No project addons were specified`
					) : (
						<>
							<h4 className={styles.summarySectionHeading}>Addons:</h4>
							<ul className={styles.summarySectionText}>
								{usedAddons.map((addon, index) => {
									if (addon === true) {
										return (
											<li key={projectAddons[index].id}>
												- {projectAddons[index].fullName}
											</li>
										);
									}
								})}
							</ul>
						</>
					)}
				</div>
				<div className={styles.summarySection}>
					{usedBudget === "" ? (
						`Estimated budget has not been specified`
					) : (
						<>
							<h4 className={styles.summarySectionHeading}>
								You plan to spend:
							</h4>
							<h5 className={styles.summarySectionText}>- ${usedBudget}</h5>
						</>
					)}
				</div>
				<div className={styles.summarySection}>
					{price === undefined ? (
						`Please provide all of information to get estimated project price`
					) : (
						<>
							<h4 className={styles.summarySectionHeading}>
								Estimated project price:
							</h4>
							<h5 className={styles.summarySectionText}>- ${price}</h5>
							<div className={styles.summaryDisclaimer}>
								<h5>
									Please take into account that the above amount is an estimate
									and various circumstances may change it. We'd love to discuss
									the details!
								</h5>
							</div>
						</>
					)}
				</div>

				<h3 className={styles.backButton} onClick={handleClick}>
					<span className={styles.backText}>
						Need a fix? Go back to project configuration
					</span>
				</h3>
			</section>
		</>
	);
}

export default Summary;
