import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "STC | Flagship Events",
	description: "Students' Technical Council Events Page",
};

export default function ICTCLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
