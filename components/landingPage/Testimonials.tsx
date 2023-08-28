"use client";
import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";

const clientTestimonials = [
	{
		id: 1,
		name: "Alice Johnson",
		company: "TechFusion",
		testimonial:
			"The ticketing app's integration of livestreams and VR has transformed our events. Our attendees now experience immersive moments that stay with them long after the event ends.",
	},
	{
		id: 2,
		name: "Mark Roberts",
		company: "EntertainmentX",
		testimonial:
			"As an entertainment company, we've seen a significant boost in engagement and ticket sales since using this app. The combination of livestreams and videos provides a new dimension to our shows.",
	},
	{
		id: 3,
		name: "Sophia Lee",
		company: "LearnFest",
		testimonial:
			"LearnFest's educational conferences have taken a leap forward with the app's livestream and VR capabilities. Attendees worldwide can now participate and learn as if they were present.",
	},
	{
		id: 4,
		name: "David Miller",
		company: "SportsHub",
		testimonial:
			"Sports enthusiasts never miss a game thanks to the app's livestreams. The VR feature adds a layer of excitement, making fans feel like they're right there on the field.",
	},
	{
		id: 5,
		name: "Emily Clark",
		company: "FashionLive",
		testimonial:
			"FashionLive's runway shows have gone global with the app's livestreams. Virtual attendees get a front-row experience, and the videos capture the artistry behind each collection.",
	},
	{
		id: 6,
		name: "John Anderson",
		company: "HealthWell",
		testimonial:
			"The app's livestreamed medical conferences and VR demos have revolutionized how we share knowledge. It's bridging gaps and enabling doctors to collaborate seamlessly.",
	},
];

const Testimonials = () => {
	const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentLogoIndex(
				(prevIndex) => (prevIndex + 1) % clientTestimonials.length
			);
		}, 15000);

		return () => clearInterval(interval);
	}, [clientTestimonials.length]);

	return (
		<div className="container">
			<div className="w-11/12 flex items-center justify-center min-h-[50vh] mx-auto">
				<div className="flex  md:flex-1 md:space-y-12 space-y-8 flex-col max-w-xl px-8 text-center md:text-left">
					<h1 className="font-bold text-2xl md:text-3xl text-violet-500 ">
						Thrilled by our Clients
					</h1>
					<h3 className="leading-relaxed text-lg">
						Live video empowers our customers to address healthcare,
						commerce, education challenges, enhancing lives with
						boundless possibilities.
					</h3>
				</div>
				<div className="hidden md:flex flex-1 flex-col max-w-lg px-8 space-y-8 overflow-hidden h-[80vh] group">
					{clientTestimonials.map((client, index) => (
						<div
							key={client.id}
							className="animate-scroll group-hover:pulse-animation"
						>
							<div
								className={`bg-gray-700 border border-gray-200 rounded-lg p-4 ${
									currentLogoIndex === index
										? "opacity-100"
										: "opacity-75"
								}`}
							>
								<h1 className="font-semibold">{client.name}</h1>
								<h2 className="text-sm my-2">
									{client.company}
								</h2>
								<div className="flex">
									<ImQuotesLeft
										size={42}
										className="mr-1 text-violet-500"
									/>
									<h3 className="text-sm">
										{client.testimonial}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
