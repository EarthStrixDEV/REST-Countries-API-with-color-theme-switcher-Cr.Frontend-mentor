import Image from "next/image";
import { useState, useEffect } from "react";

export default function GridData({ data }) {
    return (
        <>
            <section className="container flex flex-row justify-between items-center flex-wrap w-full md:max-lg:flex-col md:max-lg:justify-center sm:max-lg:flex-col sm:max-lg:justify-center">
                {data.map((element) => (
                    <div className="flex flex-col items-start bg-slate-700 rounded-lg overflow-hidden m-5 w-60 h-full">
                        <Image
                            src={element.flags.svg}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "fill",
                            }}
                        />
                        <div className="p-5">
                            <h2 className="pb-3 text-lg font-semibold">
                                {element.name}
                            </h2>
                            <p className="py-1 text-sm">
                                Population: {element.population}
                            </p>
                            <p className="py-1 text-sm">
                                Region: {element.region}
                            </p>
                            <p className="py-1 text-sm">
                                Capital: {element.capital}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}