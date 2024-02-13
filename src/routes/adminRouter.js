const express = require('express');
const React = require('react');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const AdminLogRegPage = require('../views/pages/AdminLogRegPage');

router.get('/login-register', async (req, res) => {
  renderTemplate(AdminLogRegPage, { }, res);
});

module.exports = router;
