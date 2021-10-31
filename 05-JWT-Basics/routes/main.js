const express = require('express');
const router = express.Router();
const {login,dashboard } = require("../controllers/main");

const authMidd = require("../middleware/auth");


router.route("/dashboard")
  .get(authMidd, dashboard);

router.route('/login')
  .post(login)


module.exports = router