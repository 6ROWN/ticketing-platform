import { regexPassword } from "./regexPassword";
import * as yup from "yup";

export const schema = yup.object({
	name: yup.string().required("Name is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters")
		.matches(
			regexPassword,
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
		),
	agree: yup
		.boolean()
		.oneOf([true], "You must accept the terms and conditions"),
});
