const pool = require('../../config/db');

module.exports = {
    getMissionById: ({id}, cb) => {
        const query = {
            name: 'get-mission-by-id',
            text: "select * from missions where id = $1;",
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
    getMissions: (cb) => {
        const query = {
            name: 'get-missions',
            text: "select * from missions;",
            values: []
        };
        pool.query(query, (err, result) => {
            if(err){
                return cb(err);
            }
            return cb(null, result.rows);
        });
    },
    getMissionByAstronautId: ({astronautId}, cb) => {
        const query = {
            name: 'get-mission-by-astronaut-id',
            text: "select * from missions where astronaut = $1;",
            values: [
                astronautId
            ]
        };
        pool.query(query, (err, result) => {
            if(err){
                return cb(err);
            }
            return cb(null, result.rows);
        });
    },
}