import Movie from "../models/Movie.js";
import Category from "../models/Category.js";

export const getMovies = async (req, res) => {
  const movies = await Movie.find();

  return res.status(200).json(movies);
};

export const getMoviesAndCategories = async (req, res) => {
  const movies = await Movie.find();
  const categories = await Category.find();

  return res.status(200).json({ movies, categories });
};

export const createMovie = async (req, res) => {
  const movie = req.body;

  const newMovie = await Movie.create(movie);
  return res.status(201).json(newMovie);
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  await Movie.findByIdAndDelete({ _id: id });
  return res.status(200).json({ response: "Movie deleted" });
};

export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const updateMovie = req.body;

  await Movie.findByIdAndUpdate({ _id: id }, updateMovie);
  return res.status(201).json({ response: "Movie updated" });
};
