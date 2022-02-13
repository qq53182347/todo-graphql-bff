const graphql = require('graphql');
const {GraphQLBoolean} = require("graphql");
const { GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = graphql;

const items = [
  { id: '1', name: 'Eat',completed: true },
  { id: '2', name: 'Sleep',completed: false },
  { id: '3', name: 'Repeat',completed: false }
]

const Item = new GraphQLObjectType({
  name: 'TodoItem',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    completed: { type: GraphQLBoolean }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getItems: {
      type: new GraphQLList(Item),
      args: {},
      resolve(parent, args) {
         return items;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});