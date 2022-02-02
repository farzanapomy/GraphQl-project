const { musicCollection } = require('../../config/dbConnect')

module.exports = {
    Query: {
        getMusic: async () => {
            const data = await musicCollection.find().toArray();
            console.log(data,"hello");
            return data
        }
    },
    Mutation: {
        addMusic: async (_, req) => {
            const db = await musicCollection.insertOne(req.input)
            console.log(db);
            req.input.id = data.insertedId
            return req.input;
        }
    }
};



