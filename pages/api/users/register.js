import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  let newUser = await User.findOne({ email: req.body.email })
  
  if(!newUser) {
        newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        isAdmin: false,
    })
    const user = await newUser.save()
    await db.disconnect()
  const token = signToken(user)
  res.json({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  })
}else{
    res.status(401).json({message: 'User exist, please login'})
}
})

export default handler;