import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="bg-[#131519] text-gray-200 overflow-hidden">
			{children}
		</main>
	);
};

export default layout;
