const conn = require('../models/connection');

exports.getAllProducts = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM products", (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

