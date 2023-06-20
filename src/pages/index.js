import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/MenuHeader";
import { useState ,useEffect } from "react";

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/RouteApi");
    const data_response = await response.json();
    return {
        props: {
            country: data_response,
        },
    };
}

export default function Home({ country }) {
    const [Data, setData] = useState([]);
    const [parentState, setParentState] = useState("");
    const [parentInputState, setParentInputState] = useState("");

    useEffect(() => {
        setData(country);
    }, [])

    const handleChildStateChange = (childState) => {
        setParentState(childState);
        const filtered = country.filter((item) => item.region === parentState);
        setData(filtered);
    };

    const handleChildInputChange = (childState) => {
        setParentInputState(childState);
        const result = country.filter((item) =>
            item.name.toLowerCase().includes(parentInputState.toLowerCase())
        );
        setData(result);
    }

    return (
        <>
            <Head>
                <title>REST Country App</title>
                <meta name="keyword" content="country app ,flags info" />
                <meta
                    name="description"
                    content="information of country around the world ,flags"
                />
            </Head>
            <main className="flex flex-col items-center justify-between bg-gray-800">
                <Header onStateComponent={handleChildStateChange} onStateInputComponent={handleChildInputChange} />
                <section className="container flex flex-row justify-between items-center flex-wrap w-full md:max-lg:flex-col md:max-lg:justify-center sm:max-lg:flex-col sm:max-lg:justify-center">
                    {Data.map((element) => (
                        <Link href={"/" + element.name}>
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
                        </Link>
                    ))}
                </section>
            </main>
        </>
    );
}
