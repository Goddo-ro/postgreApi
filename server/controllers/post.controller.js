const db = require('../db');


function getQueryForPosts() {
	return 'SELECT post.id, post.title, post.content, post.user_id, person.username FROM post INNER JOIN person ON post.user_id = person.id ';
}


class PostController {
	async createPost(req, res) {
		const {title, content, userId} = req.body;
		const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId]);
		res.json(newPost.rows[0]);
	}

	async getPosts(req, res) {
		const posts = await db.query(getQueryForPosts());
		res.json(posts.rows);
	}

	async getPostsByUser(req, res) {
		const id = req.query.id;
		const posts = await db.query(getQueryForPosts() + `WHERE user_id = $1`, [id]);
		res.json(posts.rows);
	}

	async getPost(req, res) {
		const id = req.params.id;
		console.log(id);
		const post = await db.query(getQueryForPosts() + `WHERE post.id = $1`, [id]);
		res.json(post.rows[0]);
	}

	async updatePost(req, res) {
		const {id, title, content} = req.body;
		const post = await db.query(`UPDATE post SET title = $1, content = $2 WHERE id = $3 RETURNING *`, [title, content, id]);
		res.json(post.rows[0]);
	}

	async deletePost(req, res) {
		const id = req.params.id;
		const post = await db.query(`DELETE FROM post WHERE id = $1`, [id]);
		res.json(post.rows[0]);
	}
}


module.exports = new PostController();
