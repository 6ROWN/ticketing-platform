import React from "react";
import { SiStarbucks } from "react-icons/si";
import { IoLogoGithub, IoLogoYoutube, IoLogoSnapchat } from "react-icons/io";
import {
	AiFillAmazonCircle,
	AiFillLinkedin,
	AiFillInstagram,
} from "react-icons/ai";

const logos = [
	<SiStarbucks size={42} />,
	<IoLogoGithub size={42} />,
	<IoLogoYoutube size={42} />,
	<IoLogoSnapchat size={42} />,
	<AiFillAmazonCircle size={42} />,
];

const LogoCarousel: React.FC = () => {
	return (
		<div className="container py-8">
			<div className="w-11/12 px-8 mx-auto">
				<h1 className="text-3xl text-center font-bold">
					Trusted by <span className="text-violet-500"> 100+ </span>{" "}
					Companies
				</h1>
				<div className="flex mt-4 justify-between md:justify-evenly w-full overflow-hidden ">
					{logos.map((logo, index) => (
						<div key={index} className="py-6 md:py-12 ">
							{logo}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LogoCarousel;
