module.exports = `
    extend type Query{
        mission(id: ID!): Mission
        missions: [Mission]
    }

    scalar Date

    type Mission{
        id: ID
        astronaut: Astronaut
        designation: String
        startDate: Date
        endDate: Date
    }
    extend type Astronaut @key(fields: "id") {
        id: ID @external
        missions: [Mission]
    }
`;