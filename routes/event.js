'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const uuid = require('uuid');
const Event = require('../models/event');

router.post('/', authenticationEnsurer, (req, res, next)=>{
  // const eventId = uuid.v4();
  // const timestamp = new Date();
  // Event.create({
  //   eventId: eventId,
  //   userId: req.user.id,
  //   status: req.body.status,
  //   startAt: timestamp,
  //   endAt: null,
  //   duration: null
  // });
  console.log(req.body); // TODO 予定と候補を保存する実装をする
  res.redirect('/');
});

module.exports = router;
