import MainHeader from "./components/MainHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export async function getStaticPaths() {
    const response = await fetch("http://localhost:3000/api/RouteApi");
    const data_response = await response.json();
    const paths = data_response.map((item) => {
        return {
            params: { name: String(item.name) },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const name = params.name.replace(" ", "%20");
    const response = await fetch(
        `http://localhost:3000/api/RouteApiQuery?categories=name&search=${name}`
    );
    const data_response = await response.json();
    return {
        props: { country_info: data_response },
    };
}

export default function countryDetail({ country_info }) {
    return (
        <>
            <Head>
                <title>{country_info[0].name}</title>
                <meta name="keyword" content="country app ,country info" />
                <meta
                    name="description"
                    content="information of country ,native name ,flags ,population ,region ,capital"
                />
            </Head>
            <main className="bg-gray-800 h-screen">
                <MainHeader />
                <button className="px-7 py-1 bg-slate-700 shadow-md shadow-slate-800 rounded-md tracking-wide font-light ml-52 mt-20">
                    <Link href={"/"}>
                        <span>&#8592;</span> Back
                    </Link>
                </button>
                {country_info.map((country_info) => (
                    <article className="w-full flex flex-row items-center justify-evenly bg-gray-800 mt-24">
                        <Image
                            src={country_info.flags.svg}
                            width={600}
                            height={500}
                        />
                        <div className="flex flex-col items-start h-full">
                            <h1 className="text-2xl font-bold mb-10">
                                {country_info.name}
                            </h1>
                            <div className="flex flex-row items-start justify-between">
                                <div className="flex flex-col mr-56">
                                    <p className="tracking-wide py-1 font-light">
                                        <strong className="font-semibold">
                                            Native Name:{" "}
                                        </strong>
                                        {country_info.nativeName}
                                    </p>
                                    <p className="tracking-wide py-1 font-light">
                                        <strong className="font-semibold">
                                            Population:
                                        </strong>{" "}
                                        {country_info.population}
                                    </p>
                                    <p className="tracking-wide py-1 font-light">
                                        <strong className="font-semibold">
                                            Region:
                                        </strong>{" "}
                                        {country_info.region}
                                    </p>
                                    <p className="tracking-wide py-1 font-light">
                                        <strong className="font-semibold">
                                            Sub Region:
                                        </strong>{" "}
                                        {country_info.subregion}
                                    </p>
                                    <p className="tracking-wide py-1 font-light">
                                        <strong className="font-semibold">
                                            Capital:
                                        </strong>{" "}
                                        {country_info.capital}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="tracking-wide py-1 font-light">
                                        <strong className="font-semibold">
                                            Top Level Domain:{" "}
                                        </strong>
                                        {country_info.topLevelDomain}
                                    </p>
                                    <p className="tracking-wide py-1 font-light">
                                        <strong className="font-semibold">
                                            Currencies:{" "}
                                        </strong>
                                        {country_info.currencies[0].name}
                                    </p>
                                    <p className="tracking-wide py-1 font-light">
                                        <strong className="font-semibold">
                                            Language:{" "}
                                        </strong>
                                        {country_info.languages.map(
                                            (languages) => (
                                                <small>
                                                    {languages.name} ,
                                                </small>
                                            )
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-start mt-16">
                                <p className="tracking-wide">
                                    <strong className="font-semibold">
                                        Border Countries:{" "}
                                    </strong>
                                    {country_info.borders === "undefined" ? (
                                        country_info.borders.map((border) => (
                                            <small className="mx-1 px-6 py-1 bg-slate-700 shadow-md shadow-slate-800 rounded-md tracking-wide font-light">
                                                {border}
                                            </small>
                                        ))
                                    ) : (
                                        <small>None</small>
                                    )}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </main>
        </>
    );
}
