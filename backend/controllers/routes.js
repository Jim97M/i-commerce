const express = require('express');
const router = express.Router();
const profile = require('../models/Profile');
const passport = require('passport');
const bcryptjs = require('bcryptjs');
require('passport').