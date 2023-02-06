import * as Yup from "yup";

const basicSchema = Yup.object({}).shape({
	firstName: Yup.string("Please provide a valid name")
		.min(2, "Please provide a valid name that is at least 2 characters.")
		.required("Please provide your name."),
	email: Yup.string("Please provide a valid email")
		.email("Please enter valid email")
		.required(
			"Please provide your e-mail address, so we can get in touch with you."
		),
	phone: Yup.string("Please provide valid phone number")
		.matches(
			/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
			"Phone number is not valid"
		)
		.required("Please provide your phone number."),
});

export default basicSchema;
