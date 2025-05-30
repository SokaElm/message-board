class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);

    if ("captureStackTrace" in Error) {
      Error.captureStackTrace(this);
    }
    this.statusCode = 404;
    this.name = "NotFoundError";
  }
}

module.exports = CustomNotFoundError;
