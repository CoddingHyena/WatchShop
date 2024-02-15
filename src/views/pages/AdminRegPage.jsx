const React = require('react');

const Layout = require('./Layout');
const RegForm = require('../components/RegForm')


module.exports = function AdminLogRegPage() {
  return (
    <Layout>
      <RegForm/>
    </Layout>
  );
};