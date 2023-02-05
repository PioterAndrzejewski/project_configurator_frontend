import * as Yup from "yup";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
		.matches(phoneRegExp, "Phone number is not valid")
		.required("Please provide your phone number."),
});

export default basicSchema;
