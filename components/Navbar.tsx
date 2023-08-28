"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import Link from "next/link";
import CustomButton from "./ui/CustomButton";

const navlinks = [
	{ id: 1, links: "Platform", href: "#" },
	{ id: 2, links: "Features", href: "#" },
	{ id: 3, links: "Customer", href: "#" },
	{ id: 4, links: "Pricing", href: "#" },
	{ id: 4, links: "Resources", href: "#" },
];

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className="bg-[#13161b] py-4 md:py-6 lg:py-8 container top-0 z-10 fixed">
			<div className="w-11/12 mx-auto flex items-center justify-between">
				<div className="text-white font-semibold text-xl">Logo</div>

				<div className="hidden md:flex space-x-8 flex-1 px-12">
					{navlinks.map((item) => (
						<div key={item.id}>
							<Link
								className="text-gray-200 text-base hover:text-violet-600"
								href={item.href}
							>
								{item.links}
							</Link>
						</div>
					))}
				</div>
				<div className="space-x-8 hidden md:flex">
					<CustomButton variant="secondary" onClick={() => ""}>
						Schedule a Demo
					</CustomButton>
					<CustomButton onClick={() => ""}> Sign In</CustomButton>
				</div>

				{/* Menu Icons  */}
				<div className="md:hidden">
					{isOpen ? (
						<FiX
							className="text-white text-2xl"
							onClick={toggleMenu}
						/>
					) : (
						<FiMenu
							className="text-white text-2xl"
							onClick={toggleMenu}
						/>
					)}
				</div>
			</div>
			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden py-4 px-8">
					{navlinks.map((item) => (
						<div key={item.id}>
							<Link
								className="block py-2"
								onClick={closeMenu}
								href={item.href}
							>
								{item.links}
							</Link>
						</div>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
