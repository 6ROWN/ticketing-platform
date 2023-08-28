import React, { forwardRef, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string | undefined;
}

const CustomInput: React.ForwardRefRenderFunction<
	HTMLInputElement,
	CustomInputProps
> = ({ label, error, ...inputProps }, ref) => {
	return (
		<div className="mb-4">
			<label className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				ref={ref}
				{...inputProps}
				className={`mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${
					error && "border-red-500"
				}`}
			/>
			{error && (
				<h1 className="block text-red-500 text-xs my-1">{error}</h1>
			)}
		</div>
	);
};

export default forwardRef(CustomInput);
