const axios = require('axios').default;

module.exports = {
    Mission: {
        astronaut: (mission, args, context) => {
            return {__typename: "Astronaut", id: mission.astronaut}
        }
    },
    Astronaut: {
        missions: (astronaut, args, context) => {
            return axios.get(`http://localhost:3001/api/v1/missions/astronaut/${astronaut.id}`).then(response => response.data);
        }
    },
    Query: {
        mission: (parent, {id}, context) => {
            return axios.get(`http://localhost:3001/api/v1/missions/${id}`).then(response => response.data);
        },
        missions: (parent, args, context) => {
            return axios.get('http://localhost:3001/api/v1/missions').then(response => response.data);
        },
    }
}