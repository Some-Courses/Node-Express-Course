const CustomAPIError = require("./custom-error");
const {StatusCodes} = require('http-status-codes');

class BadRequest extends CustomAPIError {
  constructor(message, statusCode = StatusCodes.BAD_REQUEST) {
    super(message, statusCode)
  }
}

module.exports = BadRequest;
