import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Head from "next/head";
import GridData from "./components/GridData";

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/RouteApi");
    const data_response = await response.json();
    console.log(data_response);
    return {
        props: {
            country: data_response,
        },
    };
} 

export default function Home({country}) {
    return (
        <>
            <Head>
                <title>REST Country App</title>
                <meta
                    name="keyword"
                    content="country app ,flags info" />
                <meta
                    name="description"
                    content="information of country around the world ,flags"
                />
            </Head>
            <main className="flex flex-col items-center justify-between bg-gray-800">
                <Navbar />
                <Menu />
                <GridData data={country} />
            </main>
        </>
    );
}
