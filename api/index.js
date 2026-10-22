// Vercel Serverless Function entry point
// Imports the pre-built Express app from compiled server output
const app = require('../server/dist/index.js');
module.exports = app.default || app;
