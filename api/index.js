// Vercel Serverless Function entry point
// This file imports the compiled Express app and exports it as a serverless handler
const app = require('../server/dist/index.js');
module.exports = app.default || app;
