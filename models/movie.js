const Joi = require('joi');
const mongoose = require('mongoose');
const { genreSchema } = require('./genre');

const Movie = mongoose.model(
  'Movie',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlenght: 255,
    },
    genre: {
      type: genreSchema,
      default: false,
    },
    numberInStock: {
      type: Number,
      required: true,
      minlength: 0,
      maxlenght: 255,
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      minlength: 0,
      maxlenght: 255,
    },
  })
);

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required(),
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
