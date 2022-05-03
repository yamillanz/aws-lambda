'use strict';

module.exports.calculateRandom = async (event) => {
  const { number } = event.pathParameters;

  const random = Math.floor(Math.random() * (number - 1));

  return {
    statusCode: 200,
    body: JSON.stringify({ result: random }),
  };
};
