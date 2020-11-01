const errorHandler = (error, request, response, next) => {
  console.log(error);

  if (error.code == 11000) {
    return response.status(400).json({
      error: 'this user already exists',
    });
  }

  if (process.env.ENVIRONMENT == 'development') {
    return response.status(500).json({
      error,
    });
  }

  return response.status(500).json({
    message: 'Internal server error 🥴',
  });
};

module.exports = errorHandler;
