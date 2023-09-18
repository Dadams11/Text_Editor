const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../client/dist/index.html');
    console.log(`Attempting to serve ${filePath}`);
    res.sendFile(filePath);
  });
};
