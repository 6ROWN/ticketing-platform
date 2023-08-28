"use client";
import React from "react";
import CustomButton from "../ui/CustomButton";

const Hero = () => {
	return (
		<div className=" flex">
			<div className=" flex md:flex-1 flex-col items-center justify-center min-h-screen  ">
				<div className=" max-w-xl md:px-0 px-8 flex flex-col space-y-12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none text-left">
						Seamless tickets, immersive{" "}
						<span className="text-violet-400">
							{" "}
							streams, elevate events.
						</span>
					</h1>
					<p className="text-lg leading-loose">
						Transcend ordinary video calls, journey into enriched
						video experiences. Uniquely customizable, endlessly
						adaptable.
					</p>
					<div className="flex md:flex space-x-8 ">
						<CustomButton variant="secondary" onClick={() => ""}>
							Schedule a Demo
						</CustomButton>
						<CustomButton onClick={() => ""}> Sign In</CustomButton>
					</div>
				</div>
			</div>

			<div className="hidden md:flex flex-1 items-center justify-center">
				<div className=" max-w-xl">
					<video autoPlay loop muted className=" object-cover">
						<source src="/feature-1.webm" type="video/webm" />
					</video>
				</div>
			</div>
		</div>
	);
};

export default Hero;
