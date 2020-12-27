const pool = require('../../config/db');

module.exports = {
    getAstronautById: ({id}, cb) => {
        const query = {
            name: 'get-astronaut-by-id',
            text: "select * from astronauts where id = $1;",
            values: [
                id
            ]
        };
        pool.query(query, (err, result) => {
            if(err){
                return cb(err);
            }
            return cb(null, result.rows[0]);
        });
    },
    getAstronauts: (cb) => {
        const query = {
            name: 'get-astronauts',
            text: "select * from astronauts;",
            values: []
        };
        pool.query(query, (err, result) => {
            if(err){
                return cb(err);
            }
            return cb(null, result.rows);
        });
    }
}