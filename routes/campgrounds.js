const express = require('express');
const route = express.Router();
const Campground = require('../models/campground');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgrounds = require('../controllers/campgrounds');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage })

route.route('/')
    .get(catchAsync(campgrounds.all))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.new))

route.get('/new', isLoggedIn, campgrounds.newForm)

route.route('/:id')
    .get(catchAsync(campgrounds.show))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.edit))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.delete))

route.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.editForm))

module.exports = route;
