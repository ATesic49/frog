"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import { meni } from "./page";

const ClientMeni = ({ data }: { data: meni[] }) => {
	const tipovi = Array.from(arejTipova(data));
	const [tipState, setTipState] = useState<string>(tipovi[0]);
	const filtriraniData = filtrirajPoKlasi(data, tipState);
	const podklase = Array.from(arejPodtipova(filtriraniData));
	return (
		<div className="flex flex-col py-16 items-center  w-full gap-8 bg-green-100 min-h-screen">
			<h1 className="text-2xl text-green-800 md:text-6xl font-bold font-serif tracking-wider">
				Frog
			</h1>
			<div className="grid grid-cols-5 md:text-base text-xs">
				{tipovi.map((tip) => (
					<div
						className="flex justify-center text-center items-center  border-r  cursor-pointer border-r-green-200  px-2 md:px-4"
						key={tip}
						onClick={() => setTipState(tip)}
					>
						<p
							className={`text-gray-900  ${tip === tipState && "underline"} underline-offset-8 font-semibold  py-2 md:text-xl`}
						>
							{tip}
						</p>
					</div>
				))}

				<div className="flex justify-center text-center items-center  border-r border-r-green-200 px-2 md:px-4">
					<p className="text-gray-900 font-semibold  py-2 md:text-xl">
						Kokteli
					</p>
				</div>
				<div className="flex justify-center text-center items-center  border-r border-r-green-200  px-2 md:px-4">
					<p className="text-gray-900 font-semibold  py-2 md:text-xl">
						Kokteli
					</p>
				</div>
				<div className="flex justify-center text-center items-center  border-r border-r-green-200  px-2 md:px-4">
					<p className="text-gray-900 font-semibold  py-2 md:text-xl">
						Kokteli
					</p>
				</div>
				<div className="flex justify-center text-center items-center  border-r border-r-green-200  px-2 md:px-4">
					<p className="text-gray-900 font-semibold  py-2 md:text-xl">
						Kokteli
					</p>
				</div>
			</div>
			<div className="rounded-lg flex-col flex max-w-[calc(100%_-_32px)] px-4 md:px-8 gap-16 p-4 bg-green-50 w-full lg:max-w-screen-lg ">
				{podklase.map((podklasa) => (
					<div
						key={podklasa}
						className="flex gap-4 flex-col  justify-center w-full items-center"
					>
						<h1 className="relative text-gray-800 font-black text-xl z-1 md:text-4xl ">
							<Image
								className="absolute  h-16 md:h-20 w-auto opacity-40 -z-1 rotate-12 top-0 left-0 -translate-x-1/2 -translate-y-1/4"
								alt=""
								src={logo}
							></Image>
							{podklasa}
						</h1>
						{filtrirajPoPodklasi(filtriraniData, podklasa).map((element, i) => (
							<div
								className="flex w-full lg:text-lg md:text-base text-sm crtica font-semibold justify-between"
								key={i}
							>
								<p className="text-gray-600 bg-green-50 px-4 z-[2]">
									{element.Ime}
								</p>
								<p className="text-gray-600 px-4 bg-green-50 z-[2]">
									{element.Cena}rsd
								</p>
							</div>
						))}
					</div>
				))}

				{/* <div className="flex gap-4 flex-col  justify-center w-full items-center">
					<h1 className="relative text-gray-800 font-black text-xl z-1 md:text-4xl ">
						<Image
							className="absolute  h-16 md:h-20 w-auto opacity-40 -z-1 rotate-12 top-0 left-0 -translate-x-1/2 -translate-y-1/4"
							alt=""
							src={logo}
						></Image>
						Kokteli
					</h1>
					<div className="flex w-full lg:text-lg md:text-base text-sm crtica font-semibold justify-between">
						<p className="text-gray-600 bg-green-50 px-4 z-[2]">Mai Tai</p>
						<p className="text-gray-600 px-4 bg-green-50 z-[2]">720rsd</p>
					</div>
					<div className="flex w-full lg:text-lg md:text-base text-sm crtica font-semibold justify-between">
						<p className="text-gray-600 bg-green-50 px-4 z-[2]">Krav Maga</p>
						<p className="text-gray-600 px-4 bg-green-50 z-[2]">720rsd</p>
					</div>
					<div className="flex w-full lg:text-lg md:text-base text-sm crtica font-semibold justify-between">
						<p className="text-gray-600 bg-green-50 px-4 z-[2]">
							Sex On The Beach
						</p>
						<p className="text-gray-600 px-4 bg-green-50 z-[2]">890rsd</p>
					</div>
					<div className="flex w-full lg:text-lg md:text-base text-sm crtica font-semibold justify-between">
						<p className="text-gray-600 bg-green-50 px-4 z-[2]">Mohito</p>
						<p className="text-gray-600 px-4  bg-green-50 z-[2]">720rsd</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default ClientMeni;

function arejTipova(data: meni[]) {
	const tipovi = new Set<string>();
	data.forEach((element) => {
		tipovi.add(element.Tip);
	});
	return tipovi;
}
function filtrirajPoKlasi(data: meni[], tip: string) {
	return data.filter((ele) => ele.Tip === tip);
}

function arejPodtipova(data: meni[]) {
	const stringovi = new Set<string>();
	data.forEach((d) => {
		stringovi.add(d.Podtip);
	});
	return stringovi;
}
function filtrirajPoPodklasi(data: meni[], tip: string) {
	return data.filter((ele) => ele.Podtip === tip);
}
