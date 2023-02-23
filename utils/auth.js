import jwt from 'jsonwebtoken';

export const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },

    "AHDWDPAM:WJmpwejpqdqk[q3213f23rj-dqqADAD",
    {
      expiresIn: '30d',
    }
  );
};
