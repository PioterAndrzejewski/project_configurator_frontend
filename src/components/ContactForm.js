import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
	Textarea,
	ChakraProvider,
	Spinner,
	Center,
} from "@chakra-ui/react";

import axios from "axios";

import { extendTheme } from "@chakra-ui/react";
import basicSchema from "./schemas/basicSchema";
import { useRouter } from "../context/routerContext";
import { useProject } from "../context/projectContext";
import styles from "../style/Contact.module.sass";

const theme = extendTheme({
	fonts: {
		heading: `"Jost", "Arial", "sans serif"`,
		body: `"Jost", "Arial", "sans serif"`,
	},
});

function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const { HOST, usedType, usedScope, usedAddons, usedBudget, price } =
		useProject();
	const {
		openErrorMessage,
		changeToMessageDeliveredScreen,
		openMessageDeliveryError,
		isDelivering,
		setIsDelivering,
	} = useRouter();

	const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
		useFormik({
			initialValues: {
				firstName: "",
				email: "",
				phone: "",
				type: "",
				comment: "",
			},
			onSubmit: (values, actions) => {
				(async () => {
					try {
						setIsDelivering(true);
						const response = await axios.post(`${HOST}/message`, {
							values,
							usedType,
							usedScope,
							usedAddons,
							usedBudget,
							price,
						});
						if (response.data.success) {
							changeToMessageDeliveredScreen();
							setIsDelivering(false);
						}
						openErrorMessage(false);
					} catch (e) {
						openMessageDeliveryError(true);
					}
				})();
			},
			validationSchema: basicSchema,
		});

	return (
		<>
			<section className={styles.contactForm}>
				<ChakraProvider>
					<form
						onSubmit={handleSubmit}
						autoComplete="off"
						className={styles.formContainer}
					>
						<h2 className={styles.contactHeading}>Contact details</h2>
						<div>
							<FormControl isInvalid={errors.firstName && touched.firstName}>
								<FormLabel htmlFor="firstName" color="whiteAlpha.800">
									Name
								</FormLabel>
								<Input
									id="firstName"
									name="firstName"
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
									color="whiteAlpha.800"
								/>
								<FormErrorMessage>
									{errors.firstName && touched.firstName
										? errors.firstName
										: ""}
								</FormErrorMessage>
							</FormControl>
						</div>
						<div>
							<FormControl isInvalid={errors.email && touched.email}>
								<FormLabel htmlFor="email" color="whiteAlpha.800">
									Email Address
								</FormLabel>
								<Input
									id="email"
									name="email"
									type="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									color="whiteAlpha.800"
								/>
								<FormErrorMessage>
									{errors.email && touched.email ? errors.email : ""}
								</FormErrorMessage>
							</FormControl>
						</div>
						<div>
							<FormControl isInvalid={errors.phone && touched.phone}>
								<FormLabel htmlFor="phone" color="whiteAlpha.800">
									Phone number
								</FormLabel>
								<Input
									id="phone"
									name="phone"
									type="phone"
									value={values.phone}
									onChange={handleChange}
									onBlur={handleBlur}
									color="whiteAlpha.800"
								/>
								<FormErrorMessage>
									{errors.phone && touched.phone ? errors.phone : ""}
								</FormErrorMessage>
							</FormControl>
						</div>
						<div>
							<FormControl>
								<FormLabel htmlFor="type" color="whiteAlpha.800">
									Preferred contact form
								</FormLabel>
								<Select
									id="type"
									name="type"
									value={values.type}
									onChange={handleChange}
									onBlur={handleBlur}
									color="whiteAlpha.800"
								>
									<option value="phone" style={{ color: "black" }}>
										Phone call
									</option>
									<option value="email" style={{ color: "black" }}>
										E-mail
									</option>
									<option value="whatsapp" style={{ color: "black" }}>
										WhatsApp message
									</option>
								</Select>
							</FormControl>
						</div>
						<div>
							<FormControl isInvalid={errors.comment && touched.comment}>
								<FormLabel htmlFor="comment" color="whiteAlpha.800">
									Optional message
								</FormLabel>
								<Textarea
									id="comment"
									name="comment"
									height={20}
									value={values.comment}
									onChange={handleChange}
									onBlur={handleBlur}
									color="whiteAlpha.800"
									resize="none"
								/>
							</FormControl>
						</div>

						{!isDelivering ? (
							<input
								type="submit"
								className={`${
									Object.keys(errors).length !== 0
										? styles.submitButtonDisabled
										: styles.submitButton
								}`}
								value="Send information"
								disabled={Object.keys(errors).length !== 0}
							/>
						) : (
							<Center>
								<Spinner color="white" size="lg" />
							</Center>
						)}
					</form>
				</ChakraProvider>
			</section>
		</>
	);
}

export default ContactForm;
