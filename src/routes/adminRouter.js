const express = require('express');
const React = require('react');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const AdminLogPage = require('../views/pages/AdminLogPage');
const AdminRegPage = require('../views/pages/AdminRegPage');

router.get('/log', async (req, res) => {
  renderTemplate(AdminLogPage, { }, res);
});

router.get('/reg', async (req, res) => {
  renderTemplate(AdminRegPage, { }, res);
});

module.exports = router;
