import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	// You can add additional props here if needed
	variant?: "primary" | "secondary";
	width?: "full" | "fit"; // Added width option
	onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	variant = "primary",
	width = "fit", // Default width set to "full"

	...props
}) => {
	const buttonClasses = `py-2 px-4 rounded-lg shadow-md hover:bg-opacity-75 ${
		width === "fit" ? "w-fit" : "w-full"
	} ${
		variant === "primary"
			? "bg-violet-600 text-gray-200"
			: "bg-transparent text-gray-200 outline outline-1 outline-gray-200/50 hover:outline-gray-200"
	} `;
	return (
		<div>
			<button className={buttonClasses} {...props} />
		</div>
	);
};

export default CustomButton;
