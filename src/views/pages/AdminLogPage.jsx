const React = require('react');

const Layout = require('./Layout');
const LoginForm = require('../components/LoginForm')


module.exports = function AdminLogRegPage() {
  return (
    <Layout>
      <LoginForm/>
    </Layout>
  );
};