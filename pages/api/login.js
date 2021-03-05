import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';
import {useRouter} from 'next/router';

const KEY = process.env.COOKIE_SECRET;


const authenticate = (username, password) => {
  if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return true;
  } else {
    return false;
  }
};

export default function (req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }
  const {username, password} = req.body;

  if (authenticate(username, password)) {
    const token = jwt.sign({
      username: username,
      admin: true,
    }, KEY);
    res.statusCode = 200;
    res.json({success: true, token: token});
  } else {
    res.status(401).json({message: 'Unauthorized'});
  }
}
