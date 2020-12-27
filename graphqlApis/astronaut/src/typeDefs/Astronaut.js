module.exports = `
    extend type Query{
        astronaut(id: ID!): Astronaut
        astronauts: [Astronaut]
    }

    type Astronaut @key(fields: "id"){
        id: ID
        name: String
    }
`;