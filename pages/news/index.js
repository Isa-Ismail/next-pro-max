import Link from "next/link"
import Layout from "../../components/Layout"
const News = () => {
    return (<Layout>
        <h2>Hellow news readers</h2>
        <li><Link href = '/news/hello'>navigate</Link></li>
    </Layout>)
}
export default News