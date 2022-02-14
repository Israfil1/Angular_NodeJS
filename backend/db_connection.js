const mysql = require('mysql2')


const config = {
    host: "localhost",
    user : 'root',
    password : '',
    database : "m2i_angular_nodejs"
}

//Connection à la base de données

const connection = mysql.createConnection(config);

const query = (...args) => {
    return new Promise((resolve, reject) => {
      connection.query(...args, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  
  const closeConnection = () => {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.end((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  };

   //vérifier la connexion à la base
 connection.connect(err => {
    if (err) {
        console.log('Erreur lors de la connexion à la base de données', err.message)
    }
    console.log("Connexion réussie à la base de données")
}) 

  
  module.exports = {
    connection: connection,
    closeConnection: closeConnection,
    query: query
  };