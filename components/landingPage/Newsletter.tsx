"use client";
import React from "react";
import CustomButton from "../ui/CustomButton";

const Newsletter: React.FC = () => {
	return (
		<div className="py-12">
			<div className="w-11/12 rounded-lg px-12 bg-gradient-to-l from-gray-700 via-gray-900 to-black mx-auto py-8">
				<div className="flex flex-col max-w-4xl mx-auto space-y-8">
					<h1 className="text-3xl font-semibold">
						Are you an organiser?
					</h1>
					<h2>
						Maximise your event's success with us - the ticketing
						platform that helps you sell more tickets, promote with
						ease and save time.
					</h2>
					<div className="flex space-x-12">
						<CustomButton onClick={() => ""}>
							{" "}
							Get Started
						</CustomButton>
						<CustomButton variant="secondary" onClick={() => ""}>
							Learn More
						</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
