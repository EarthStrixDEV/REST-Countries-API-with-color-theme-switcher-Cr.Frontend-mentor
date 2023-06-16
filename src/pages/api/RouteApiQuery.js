// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFile } from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "./data.json");

export default async function handler(req, res) {
    const query = req.query;
    const jsonData = await readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);
    res.status(200).json(objectData[0]);
}
