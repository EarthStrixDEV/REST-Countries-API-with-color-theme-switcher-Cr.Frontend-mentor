import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default async function gridData() {
    const [data, setData] = useState([]);

    useEffect(() => {
            fetch("../api/data.json")
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((err) => console.error(err));
    },[])

    return (
        <>
            <section className="grid grid-cols-4 grid-rows-2 gap-4">
                { data.map((data) => {
                    <div className="flex flex-col items-center">
                        <Image src={data.flags.png} />
                        <div className="flex flex-col justify-start items-start">
                            <h3>{ data.name }</h3>
                            <p>Population: { data.population }</p>
                            <p>Region: { data.region }</p>
                            <p>Capital: { data.capital }</p>
                        </div>
                    </div>
                })}
                <h1></h1>
            </section>
        </>
    );
}