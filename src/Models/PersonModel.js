const pool = require('./config/dbConfig');

class Person {
  static async getAll() {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM person');
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async getById(id) {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM person WHERE id = $1', [id]);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async create(name, apellidoPaterno, apellidoMaterno, estado) {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'INSERT INTO person (nombre, apellido_paterno, apellido_materno, estado) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, apellidoPaterno, apellidoMaterno, estado]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async update(id, name, apellidoPaterno, apellidoMaterno, estado) {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'UPDATE person SET nombre = $2, apellido_paterno = $3, apellido_materno = $4, estado = $5 WHERE id = $1 RETURNING *',
        [id, name, apellidoPaterno, apellidoMaterno, estado]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async delete(id) {
    const client = await pool.connect();
    try {
      await client.query('DELETE FROM person WHERE id = $1', [id]);
    } finally {
      client.release();
    }
  }
}

module.exports = Person;
