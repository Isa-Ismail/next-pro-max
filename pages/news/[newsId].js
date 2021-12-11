import { useRouter } from "next/router"
const News = () => {
    const router = useRouter()
    return (<>
        <h2>Hellow news readers it is detailed {router.query.newsId}</h2>
    </>)
}
export default News