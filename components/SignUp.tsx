"use client";
import React, { useState } from "react";
import CustomButton from "./ui/CustomButton";
import CustomInput from "./ui/CustomInput";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/schema";
import { useRouter } from "next/navigation";
import { BiShow, BiHide } from "react-icons/bi";

const SignUp = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	//toggle password
	const togglePassword = () => setShowPassword(!showPassword);

	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			agree: false,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: Record<string, any>) => {
		console.log("Form data:", data);
	};

	return (
		<div className="flex items-center justify-center min-h-screen px-4">
			<div className="max-w-full md:max-w-[60%] mx-auto p-2 flex flex-row rounded-lg bg-gray-200 relative">
				<div
					onClick={() => router.push("/")}
					className="absolute z-10 right-4 top-2 p-2 font-bold text-xl cursor-pointer"
				>
					x
				</div>
				{/* Welcome information */}
				<div className="hidden w-5/12 mx-auto md:flex bg-violet-500 min-h-[80vh] justify-center items-center flex-col text-center space-y-8 px-2">
					<h1 className="text-4xl font-bold mb-4">
						Start your journey with us
					</h1>
					<p className="text-gray-200 text-sm">
						Join us for immersive livestreams that break barriers,
						connecting you to global performances, workshops, and
						more.
					</p>
					<CustomButton variant="secondary" onClick={() => ""}>
						Discover More
					</CustomButton>
				</div>
				{/* Login form */}
				<div className="w-full md:w-7/12 mx-auto bg-gray-200 flex flex-col justify-center px-8">
					<h2 className="text-2xl font-semibold text-left mb-4">
						Sign Up
					</h2>

					<form
						onSubmit={handleSubmit(onSubmit)}
						noValidate
						className="space-y-4"
					>
						<CustomInput
							label="Name"
							type="text"
							placeholder="Enter your name"
							{...register("name")}
							error={errors?.name?.message}
						/>
						<CustomInput
							label="Email"
							type="email"
							placeholder="example@email.com"
							{...register("email")}
							error={errors?.email?.message}
						/>
						<div className="relative">
							<CustomInput
								label="Password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password"
								{...register("password")}
								error={errors?.password?.message}
							/>
							<div
								onClick={togglePassword}
								className="absolute cursor-pointer right-5 top-8"
							>
								{showPassword ? (
									<BiHide size={24} />
								) : (
									<BiShow size={24} />
								)}
							</div>
						</div>
						<div className="flex  space-x-2">
							<CustomInput
								type="checkbox"
								{...register("agree")}
								error={errors?.agree?.message}
							/>
							<label className="text-xs">
								<span className="text-gray-600">
									I agree to all
								</span>{" "}
								<span className="text-blue-500 cursor-pointer">
									Terms, Privacy Policies
								</span>{" "}
								<span className="text-gray-600">and Fees</span>
							</label>
						</div>

						<div className="">
							<CustomButton width="full" type="submit">
								Create Account
							</CustomButton>
						</div>
					</form>
					<div>
						<div className="flex items-center my-4">
							<hr className="flex-grow border-t border-gray-300 mr-4" />
							<span className="text-gray-500">OR</span>
							<hr className="flex-grow border-t border-gray-300 ml-4" />
						</div>
						<div>
							<CustomButton
								variant="secondary"
								width="full"
								onClick={() => ""}
							>
								<div className="flex justify-center items-center space-x-8">
									<FcGoogle size={20} />
									<h1 className="text-gray-700 font-medium">
										Continue with Google
									</h1>
								</div>
							</CustomButton>
						</div>
						<div className="my-6">
							<Link
								href={"/login"}
								className=" text-blue-500 text-sm text-center"
							>
								<h3 className="text-gray-700">
									Already having an account?
									<span className="text-blue-500">
										{" "}
										Log In
									</span>
								</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
