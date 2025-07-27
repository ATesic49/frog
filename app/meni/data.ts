import fs from "fs";
import path from "path";
import { parse } from "csv-parse";

export async function getData() {
	"use server";

	const filePath = path.join(process.cwd(), "public", "data.csv");

	return new Promise((resolve, reject) => {
		const records: any[] = [];

		fs.createReadStream(filePath)
			.pipe(parse({ columns: true, trim: true }))
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
