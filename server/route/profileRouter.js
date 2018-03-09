console.log('profileRoute R');
const User = require('../models/User');
const express = require('express')
;
const profileRouter = express.Router();
const Verify = require('../passport/verify');

profileRouter.route('/')
  .get(Verify.verifyUser, (req, res, next) => {
    console.log('profile');
    console.log(req.decoded);
    console.log(res.user);
    console.log('++++++');
    User.findById(req.decoded.sub)
      .then((user) => {
        res.status(200).json({
          user,
          message: 'You\'re authorized to see this secret message.',
        });
      })
      .catch((err) => {
        res.status(200).json({
          message: 'You\'re NOT authorized to see this secret message.',
        });
      });
  });


module.exports = profileRouter;
