import { Request, Response } from 'express';
import { Category } from '../models/category';

// Add a new category
const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newCategory = new Category({ name, path: name });
    await newCategory.save();
    res.status(201).json({
      message: 'Category created successfully',
      category: newCategory,
    });
  } catch (err) {
    res.status(500).json({ error: 'Could not create category', err });
  }
};

// Add a subcategory
const addSubcategory = async (req: Request, res: Response) => {
  const { parentId } = req.params;
  const { name } = req.body;
  try {
    const parentCategory = await Category.findById(parentId);
    if (!parentCategory) {
      return res.status(404).json({ error: 'Parent category not found' });
    }

    const newSubcategory = new Category({
      name,
      parent: parentId,
      path: `${parentCategory.path} > ${name}`,
    });
    await newSubcategory.save();

    res.status(201).json({
      message: 'Subcategory created successfully',
      subcategory: newSubcategory,
    });
  } catch (err) {
    res.status(500).json({ error: 'Could not create subcategory', err });
  }
};

// Retrieve all subcategories of a category
const getSubcategories = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const subcategories = await Category.find({ path: { $regex: `^${category.path} >` } });

    res.status(200).json({ subcategories });
  } catch (err) {
    res.status(500).json({ error: 'Could not retrieve subcategories', err });
  }
};

export { createCategory, addSubcategory, getSubcategories };
