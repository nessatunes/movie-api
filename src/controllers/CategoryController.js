import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  const categories = await Category.find();

  return res.status(200).json(categories);
};

export const createCategory = async (req, res) => {
  const category = req.body;

  const newCategory = await Category.create(category);
  return res.status(201).json(newCategory);
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  await Category.findByIdAndDelete({ _id: id });
  return res.status(200).json({ response: "Category deleted" });
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const updateCategory = req.body;

  await Category.findByIdAndUpdate({ _id: id }, updateCategory);
  return res.status(201).json({ response: "Category updated" });
};
