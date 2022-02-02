const { ApolloServer, gql } = require('apollo-server-express');


module.exports = gql`
   extend type Query{
     getMusic:[Music]
  }

  input music{
    title:String
    singer:String
    duration:Int
  }

type Music{
  id:ID
  title:String
  singer:String
  duration:Int

}


extend type Mutation{
    addMusic(input:music):Music
}


`;