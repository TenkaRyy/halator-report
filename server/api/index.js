// Vercel serverless handler
// Imports the pre-built Express app from compiled dist/ output
const app = require('../dist/index.js');
module.exports = app.default || app;
