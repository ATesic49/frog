import fs from "fs";
import path from "path";
import { parse } from "csv-parse";
import { meni } from "./page";

export async function getData() {
	"use server";

	const filePath = path.join(process.cwd(), "public", "data.csv");

	return new Promise((resolve, reject) => {
		const records: meni[] = [];

		fs.createReadStream(filePath, { encoding: "utf-8" })
			.pipe(
				parse({
					columns: true,
					trim: true,
					skip_empty_lines: true,
					bom: true,
					quote: '"',
				})
			)
			.on("data", (row) => {
				records.push(row);
			})
			.on("end", () => {
				resolve(records);
			})
			.on("error", (err) => {
				reject(err);
			});
	});
}
