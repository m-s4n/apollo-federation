const axios = require('axios').default;

module.exports = {
    Astronaut: {
        __resolveReference(astronaut){
            return axios.get(`http://localhost:3000/api/v1/astronauts/${astronaut.id}`).then(response => response.data);
        }
    },
    Query: {
        astronaut: (parent, {id}, context) => {
            
            return axios.get(`http://localhost:3000/api/v1/astronauts/${id}`).then(response => response.data);
        },
        astronauts: (parent, args, context, info) => {
            return axios.get('http://localhost:3000/api/v1/astronauts').then(response => response.data);
        },
    }
}