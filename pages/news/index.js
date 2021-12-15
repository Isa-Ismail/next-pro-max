import Link from "next/link"
const News = () => {
    return (<>
        <h2>Hellow news readers</h2>
        <li><Link href = '/news/hello'>navigate</Link></li>
    </>)
}
export default News