"use client";
import { HomeIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
	const pathname = usePathname();

	const links = [
		{
			href: "/",
			label: "Home",
			icon: <HomeIcon />,
			isActive: pathname === "/",
		},
		{
			href: "/shop",
			label: "Shop",
			icon: <ShoppingBagIcon />,
			isActive: pathname === "/shop",
		},
	];

	return (
		<header className="flex justify-between items-center py-4">
			<Link href={"/"} className="text-2xl font-bold">
				Logo
			</Link>
			<ul className="flex items-center">
				{links.map((link, idx) => {
					const { href, icon, isActive, label } = link;

					return (
						<li key={idx}>
							<Link
								href={href}
								className="flex items-center gap-2 px-4"
							>
								{icon}
								{label}
							</Link>
						</li>
					);
				})}
			</ul>
		</header>
	);
};

export default Header;
