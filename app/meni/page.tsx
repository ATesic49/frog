import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { getData } from "./data";
import ClientMeni from "./ClientMeni";

export type meni = {
	Ime: string;
	Tip: string;
	Podtip: string;
	Cena: string;
};
const page = async () => {
	const data = (await getData()) as meni[];

	return <ClientMeni data={data} />;
};

export default page;
