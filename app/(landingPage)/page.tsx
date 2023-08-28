import Features from "@/components/landingPage/Features";
import Navbar from "@/components/Navbar";
import Hero from "@/components/landingPage/Hero";
import React from "react";
import Industry from "@/components/landingPage/Industry";
import LogoCarousel from "@/components/landingPage/LogoCarousel";
import Testimonials from "@/components/landingPage/Testimonials";
import Newsletter from "@/components/landingPage/Newsletter";
import Footer from "@/components/landingPage/Footer";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Features />
			<Industry />
			<LogoCarousel />
			<Testimonials />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default LandingPage;
