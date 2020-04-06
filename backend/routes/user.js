var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = [
    {
      id: 1,
      mail: 'user1@gmail.com',
      pass: '123',
      nick: 'nickU1',
      city: 'Perm',
      urlPicture: null
    },
    {
      id: 2,
      mail: 'user2@yandex.ru',
      pass: 'qwe',
      nick: 'nickU2',
      city: 'Moscow',
      urlPicture: null
    }
  ];
});

router.get('/login/me', (req, res) => {
  const users = [
    {
      id: 1,
      mail: 'user1@gmail.com',
      pass: '123',
      nick: 'nickU1',
      city: 'Perm',
      urlPicture: null
    },
    {
      id: 2,
      mail: 'user2@yandex.ru',
      pass: 'qwe',
      nick: 'nickU2',
      city: 'Moscow',
      urlPicture: null
    }
  ];

  if(req.cookies.userId) {
    const user = users.find(user => user.id == req.cookies.userId);
    if (user) res.json({ user: user });
    else res.json({user: null});
  }
  else res.json({user: null});
});

router.post('/login/postLogin', (req, res) => {
  const users = [
    {
      id: 1,
      mail: 'user1@gmail.com',
      pass: '123',
      nick: 'nickU1',
      city: 'Perm',
      urlPicture: null
    },
    {
      id: 2,
      mail: 'user2@yandex.ru',
      pass: 'qwe',
      nick: 'nickU2',
      city: 'Moscow',
      urlPicture: null
    }
  ];

  const { Mail, Password } = req.body.Login;

  const user = users.find(u => u.pass == Password && u.mail == Mail);

  if (user) {
    res.cookie('userId', `${user.id}`).json({ Login: { Flag: true } });
  }
  else res.json({ Login: { Flag: false } });
});

module.exports = router;
