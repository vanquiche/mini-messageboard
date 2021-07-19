var express = require('express');
var router = express.Router();

const moment = require('moment');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: moment().format('MMMM Do, h:mm:ss a'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: moment().format('MMMM Do, h:mm:ss a'),
  },
];

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: moment().format('MMMM Do, h:mm:ss a'),
  });
  res.redirect('/');
});

module.exports = router;
