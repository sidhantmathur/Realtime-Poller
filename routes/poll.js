const express = require('express');
const router = express.Router();

const Pusher = require('pusher')

var pusher = new Pusher({
    appId: '481874',
    key: 'c4d83916f656871d1b13',
    secret: '49ba866c38a85efa6514',
    cluster: 'us2',
    encrypted: true
  });

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
    });
    return res.json({ success: true, message: 'Thank you for voting '});
});


module.exports = router;