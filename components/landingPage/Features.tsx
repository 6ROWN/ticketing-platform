import React from "react";
import { CiStreamOn } from "react-icons/ci";
import { BsPersonVideo } from "react-icons/bs";
import { PiVirtualReality } from "react-icons/pi";

const features = [
	{
		title: "Live Video Conversations",
		icon: BsPersonVideo,
		description:
			"Ideal for compact classrooms, fitness apps, community platforms, and beyond.",
		videoUrl: "/Hero-1.webm",
	},
	{
		title: "High-Quality Livestreams",
		icon: CiStreamOn,
		description:
			"Suitable for expansive classrooms, online events, live shopping, and much more.",
		videoUrl: "/feature-2.webm",
	},
	{
		title: "Virtual Reality Integration",
		icon: PiVirtualReality,
		description: " Immerse Yourself in a New Dimension of Experiences",
		videoUrl: "/feature-3.webm",
	},
];

const Features: React.FC = () => {
	return (
		<div className="py-6 container">
			<div className="w-11/12 mx-auto text-center px-8">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
					Experience the{" "}
					<span className="text-violet-400">Future of</span> Events
				</h1>
				<h3 className="text-lg leading-loose my-8">
					Transition your experiences from one-on-one calls to massive
					streams.
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
					{features.map((feature, index) => (
						<div key={index}>
							<div className="outline outline-1 outline-gray-200/50 rounded p-4 flex flex-col space-y-4 h-auto md:min-h-[560px] w-full ">
								<feature.icon
									className="mx-auto text-violet-400"
									size={48}
								/>
								<h1 className="text-2xl font-bold">
									{feature.title}
								</h1>
								<h3 className="text-sm">
									{feature.description}
								</h3>
								<div className="flex justify-between items-center space-x-4">
									<div className="flex-1 py-2 px-4 bg-gray-700 rounded-lg text-sm">
										<div className="text-violet-500 text-sm font-bold mb-1">
											Up to 1000
										</div>
										<div className="font-medium text-xs">
											Participants
										</div>
									</div>
									<div className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-sm">
										<div className="text-sm font-bold text-violet-500 mb-1">
											7-8 secs
										</div>
										<div className="font-medium text-xs">
											Latency
										</div>
									</div>
								</div>
								<video
									autoPlay
									loop
									muted
									className="object-cover hidden md:block"
								>
									<source
										src={feature.videoUrl}
										type="video/webm"
									></source>
								</video>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
