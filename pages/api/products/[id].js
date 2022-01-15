import nc from 'next-connect'
import Product from '../../../models/Product'
import db from '../../../utils/db'

const handler = nc()

handler.get( async (req, res) => {
    await db.connect()
    const product = Product.findById(req.params.id)
    await db.disconnect()
    res.json(product)
})

export default handler