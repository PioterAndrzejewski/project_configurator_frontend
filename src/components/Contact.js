import React, { useEffect, useState } from "react";

import { extendTheme } from "@chakra-ui/react";
import { useRouter } from "../context/routerContext";

import ContactForm from "./ContactForm";
import Summary from "./Summary";

import styles from "../style/Contact.module.sass";

function Contact() {
	const { screen } = useRouter();

	return (
		<>
			<section
				className={`${styles.contact} ${
					screen !== "contact" ? styles.contactMoved : ""
				}`}
			>
				<Summary />
				<ContactForm />
			</section>
		</>
	);
}

export default Contact;
