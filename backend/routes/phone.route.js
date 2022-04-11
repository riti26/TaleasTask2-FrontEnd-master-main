let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// User Model
let User = require('../models/user.model.js');
let phoneSchema = require('../models/phone.model');

// READ Users
router.route('/').get((req, res) => {
    phoneSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// CREATE Phone
router.route('/create-phone/:id').post((req, res, next) => {
    phoneSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
          const user = User.findById({_id: req.params.id}, (error, userData) => {
            if (error) {
              return next(error)
            } else {
              userData.phones.push(data)
              userData.save();
            }
          })
        res.json(data)
      }
    })
  });

  // LOAD phones
router.route('/load-phones/:id').get(async (req, res, next) => {
    phoneSchema.find({user: req.params.id}, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
  });

  module.exports = router;