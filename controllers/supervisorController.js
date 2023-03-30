const conn = require('../models/connection');

exports.getAllSupervisors = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM users where user_id != 'NULL'", (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

