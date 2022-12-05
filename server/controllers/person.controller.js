const db = require('../db');

class PersonController {
    async createPerson(req, res) {
        const { username } = req.body;
        const newPerson = await db.query(`INSERT INTO person (username) values ($1) RETURNING *`, [username]);
        return res.json(newPerson.rows[0]);
    }

    async getPersons(req, res) {
        const persons = await db.query(`SELECT * FROM person`);
        res.json(persons.rows);
    }

    async getOnePerson(req, res) {
        const id = req.params.id;
        const persons = await db.query(`SELECT * FROM person WHERE id = $1`, [id]);
        res.json(persons.rows[0]);
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