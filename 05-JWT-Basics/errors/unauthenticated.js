const CustomAPIError = require("./custom-error");
const {StatusCodes} = require('http-status-codes');

class UnauthenticatedError extends CustomAPIError {
  constructor(message, statusCode = StatusCodes.UNAUTHORIZED) {
    super(message, statusCode) 
  }
}

module.exports = UnauthenticatedError;
