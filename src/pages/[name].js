export async function getStaticPaths() {
    const response = await fetch("http://localhost:3000/api/RouteApi");
    const data_response = await response.json();
    const paths = data_response.map((item) => {
        return {
            params: {name: String(item.name)}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const name = params.name.replace(" ", "%20");
    const response = await fetch(
        `http://localhost:3000/api/RouteApiQuery?categories=name&search=${name}`
    );
    const data_response = await response.json();
    return {
        props: { country_info : data_response },
    };
}

export default function countryDetail({country_info}) {
    return (
        <>
            
        </>
    )
}