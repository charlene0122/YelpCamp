const express = require('express');
const route = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const User = require('../models/user');
const { storeReturnTo } = require('../middleware');
const users = require('../controllers/users')

route.route('/register')
    .get(users.registerForm)
    .post(catchAsync(users.register))

route.route('/login')
    .get(users.loginForm)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

route.get('/account', users.account)
route.get('/logout', users.logout);

module.exports = route;