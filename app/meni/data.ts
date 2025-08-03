import { parse } from "csv-parse/sync";
import { meni } from "./page";

// export async function getData() {
// 	"use server";

// 	const filePath = path.join(process.cwd(), "public", "data.csv");

// 	return new Promise((resolve, reject) => {
// 		const records: meni[] = [];

// 		fs.createReadStream(filePath, { encoding: "utf-8" })
// 			.pipe(
// 				parse({
// 					columns: true,
// 					trim: true,
// 					skip_empty_lines: true,
// 					bom: true,
// 					quote: '"',
// 				})
// 			)
// 			.on("data", (row) => {
// 				records.push(row);
// 			})
// 			.on("end", () => {
// 				resolve(records);
// 			})
// 			.on("error", (err) => {
// 				reject(err);
// 			});
// 	});
// }
export async function getData(): Promise<meni[]> {
	"use server";

	const sheetId = "1FCmkWg2n2BEk7OV8qijFrL2HFALnVa0khHrFMbkaDIU";
	const gid = "0"; // ako koristiš prvi tab u sheetu
	const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

	const response = await fetch(csvUrl);
	if (!response.ok) {
		throw new Error("Greška pri čitanju Google Sheeta");
	}

	const csvText = await response.text();

	const records: meni[] = parse(csvText, {
		columns: true,
		trim: true,
		skip_empty_lines: true,
		bom: true,
		quote: '"',
	});

	return records;
}
