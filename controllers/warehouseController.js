const conn = require('../models/connection');

exports.getAllWarehouses = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM warehouses", (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

