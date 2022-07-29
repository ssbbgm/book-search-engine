//import Book and User models
const { Book, User } = require('../models');
//import error module from Apollo
const { AuthenticationError } = require('apollo-server-express');
//import sign token from auth
const { signToken } = require('../utils/auth');


const resolvers = {

    Query: {
        me: async (parent, args, context, info) => {
            return users.find(user => user.id === args.id || user.username === args.username);
        }
    }










};

module.exports = resolvers;