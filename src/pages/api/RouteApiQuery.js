// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jsonData from "../../../data.json";

export default async function handler(req, res) {
    const { categories ,search } = req.query;
    if (categories === "region") {
        const filteredData = jsonData.filter(
            (item) => item.region === search
        );
        res.status(200).json(filteredData);
    } else if (categories === "name") {
        const filteredData = jsonData.filter(
            (item) => item.name === search
        );
        res.status(200).json(filteredData);
    } else if (categories === "all") {
        res.status(200).json(jsonData);
    } else {
        res.status(404).json("Invalid category");
    }
}
