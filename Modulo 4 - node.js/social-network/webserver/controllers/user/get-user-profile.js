'use strict';

const UserModel = require('../../../models/user-model');

async function getUserProfile(req, res, next) {
  return res.status(200).send(req.claims);
}

module.exports = getUserProfile;
