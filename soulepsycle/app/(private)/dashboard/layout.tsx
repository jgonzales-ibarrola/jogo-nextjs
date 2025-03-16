import Sidenav from "@/components/private/Sidenav";
import React, { ReactNode } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className="flex h-screen overflow-hidden">
				<Sidenav />
				<main className="flex-1 overflow-y-auto">{children}</main>
			</div>
		</>
	);
};

export default PrivateLayout;
