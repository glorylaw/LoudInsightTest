import express, { Request, Response, NextFunction } from 'express';
import { createCategory, addSubcategory, getSubcategories } from '../controllers/categoryController';

const router = express.Router();

const asyncHandler = (fn: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };

// Route to add a new category
router.post('/categories', createCategory);

// Route to add a subcategory under a category
router.post('/categories/:parentId/subcategories', asyncHandler(addSubcategory));

// Route to retrieve all subcategories under a given category
router.get('/categories/:categoryId/subcategories', asyncHandler(getSubcategories));

export default router;
