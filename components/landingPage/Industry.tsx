"use client";
import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const industryList = [
	{ id: 1, name: "Sports", ImgUrl: "/sports.jpeg" },
	{ id: 2, name: "Music", ImgUrl: "/music.jpeg" },
	{ id: 3, name: "HealthCare", ImgUrl: "/conference.jpg" },
	{ id: 4, name: "Fitness", ImgUrl: "/fitness.jpg" },
	{ id: 5, name: "Tech", ImgUrl: "/tech.jpg" },
	{ id: 6, name: "Comedy", ImgUrl: "/comedy.jpeg" },
	{ id: 7, name: "Fitness", ImgUrl: "/fitness.jpg" },
	{ id: 8, name: "Tech", ImgUrl: "/tech.jpg" },
	{ id: 9, name: "Comedy", ImgUrl: "/comedy.jpeg" },
];

const Industry: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [slideOffset, setSlideOffset] = useState(0);

	const goToPrevious = () => {
		if (currentIndex === 0) return;
		setCurrentIndex((prevIndex) => prevIndex - 1);
		setSlideOffset((prevOffset) => prevOffset + 100 / industryList.length);
	};

	const goToNext = () => {
		if (currentIndex === industryList.length - 1) return;
		setCurrentIndex((prevIndex) => prevIndex + 1);
		setSlideOffset((prevOffset) => prevOffset - 100 / industryList.length);
	};

	return (
		<div className="container py-8">
			<div className="w-11/12 mx-auto">
				<div className="flex justify-between items-center px-8">
					<h1 className="text-xl md:text-3xl uppercase font-semibold">
						category
					</h1>
					<div className="flex space-x-4 md:space-x-8">
						<button
							onClick={goToPrevious}
							className="cursor-pointer"
						>
							<BsChevronLeft size={20} />
						</button>
						<button onClick={goToNext} className="cursor-pointer">
							<BsChevronRight size={20} />
						</button>
					</div>
				</div>
				<div className="flex gap-8 overflow-hidden w-full my-8">
					<div
						className="flex transition-transform duration-300 space-x-4 md:space-x-8"
						style={{ transform: `translateX(${slideOffset}%)` }}
					>
						{industryList.map((item, index) => (
							<div
								key={item.id}
								className="relative min-w-[350px] h-[200px] hover:scale-105"
							>
								<Link href="">
									<Image
										src={item.ImgUrl}
										width={100}
										height={100}
										alt={item.name}
										className="w-full h-full rounded-lg object-cover"
									/>
									<h3 className="absolute bottom-4 left-8 shadow-black font-semibold">
										{item.name}
									</h3>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Industry;
