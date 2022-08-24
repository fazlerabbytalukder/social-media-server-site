import express from 'express';
import { getPost, createPost } from '../controllers/posts.js';

const router = express.Router();

//this set localhost:5000 to localhost:5000/posts
router.get('/', getPost)
router.post('/', createPost)

export default router;