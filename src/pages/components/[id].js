import { useRouter } from "next/router"

export async function getStaticPaths() {
    const response = await fetch("http://localhost:3000/api/RouteApi");
    const data_response = await response.json();
    const paths = data_response.map((item) => {
        return {
            params: {id: String(item.name)}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default function countryDetail() {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
            <h1>ข้อมูลประเทศ ...</h1>
        </>
    )
}