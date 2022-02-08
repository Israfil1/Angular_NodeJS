const app = require('./app.js');
const PORT = '3000'


app.listen(3000, (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
    } else {
      console.log(`Le serveur est actif sur le port: ${PORT}`);
    }
  });
  