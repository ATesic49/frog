import type { Metadata } from "next";
import { Fraunces, Quicksand } from "next/font/google";
import "../globals.css";

const quicksand = Quicksand({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});
const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-serif",
});

export const metadata: Metadata = {
	title: "Frog Caffe Bar - Meni",
	description:
		"Dobrodošli u Frog Caffe, mesto gde se boemski duh spaja sa savremenim ukusima. Naš meni je pažljivo kreiran da ponudi kvalitet, autentičnost i uživanje – bilo da dolaziš po svoj jutarnji espresso, lagani brunch ili osvežavajući koktel u popodnevnim satima.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${fraunces.variable} ${quicksand.className}`}>
				{children}
			</body>
		</html>
	);
}
