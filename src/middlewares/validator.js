'use strict';
const validator = (req, res, next) => {
    const { name } = req.query;
  
    if (!name) {
        next('name is empty')
        } else {
      next();
    }
  };
  
  module.exports = validator;