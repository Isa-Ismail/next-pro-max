import nc from 'next-connect';
import Product from '../../models/Product'
import User from '../../models/User';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {

    await db.connect()

    await User.deleteMany()

    await User.insertMany(data.users)

    await Product.deleteMany()

    await Product.insertMany(data.products)

    await db.disconnect()

    res.json({ message: 'seeded' })
})

export default handler;