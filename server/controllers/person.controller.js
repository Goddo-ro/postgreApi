const db = require('../db');

class PersonController {
    async createPerson(req, res) {
        const { username, password } = req.body;
	try {
		const isExists = await db.query(`select exists(select * from person where username=$1) AS "exists"`, [username]);
		if (!isExists.rows[0].exists) {
			const newPerson = await db.query(`INSERT INTO person (username, password) values ($1, $2) RETURNING *`, [username, password]);
        		return res.json(newPerson.rows[0]);
		} else {
			res.statusMessage = "Username is taken";
			res.status(400).end();
		}
	} catch (err) {
		console.log(err);
	}
    }

    async getPersons(req, res) {
        const persons = await db.query(`SELECT * FROM person`);
        res.json(persons.rows);
    }


    async getOnePersonByUsername(req, res) {
	const username = req.params.username;
	const person = await db.query(`SELECT * FROM person WHERE username = $1`, [username]);
	res.json(person.rows[0]);
    }

    async getOnePerson(req, res) {
        const id = req.params.id;
        const person = await db.query(`SELECT * FROM person WHERE id = $1`, [id]);
        res.json(person.rows[0]);
    }

    async updatePerson(req, res) {
        const {id, username} = req.body;
        const updatedPerson = await db.query(`UPDATE person SET username = $1 WHERE id = $2 RETURNTING *`, [id, username]);
        res.json(person.rows[0]);
    }

    async deletePerson(req, res) {
        const id = req.params.id;
        const deletedPerson = await db.query(`DELETE FROM person WHERE id = $1`, [id]);
        res.json(deletedPerson.rows[0]);
    }
}

module.exports = new PersonController();
