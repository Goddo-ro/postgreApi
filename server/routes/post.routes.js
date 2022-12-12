const Router = require('express');
const router = new Router();
const postController = require('../controllers/post.controller');

router.post('/post', postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/post', postController.getPostsByUser);
router.get('/post/:id', postController.getPost);
router.put('/post', postController.updatePost);
router.delete('/post/:id', postController.deletePost);


module.exports = router;
