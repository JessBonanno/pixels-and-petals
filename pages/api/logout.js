import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const KEY = process.env.COOKIE_SECRET;
export default function (req, res) {


  res.setHeader('Set-Cookie', cookie.serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    expires: new Date(0),
    sameSite: 'strict',
    paths: '/',
  }));
    res.statusCode = 200
    res.json({success: true})

}
