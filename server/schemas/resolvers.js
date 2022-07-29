//import Book and User models
const { Book, User } = require('../models');
//import error module from Apollo
const { AuthenticationError } = require('apollo-server-express');
//import sign token from auth
const { signToken } = require('../utils/auth');


const resolvers = {

    Query: {
        me: async (parent, args, context, info) => {
            let user = await User.findOne({_id : context.user._id});
            return user
        }
    },

    Mutation: {
        addUser: async(parent, args, context, info) => {
            let createUser = await User.create(args);
            let token = signToken(createUser);
            return {token, createUser}
        },
        login: async (parent, args, context, info) => {
            const user = await User.findOne({ $or: [{ username: args.username }, { email: args.email }] });
            if (!user) {
            throw new AuthenticationError('There has been an error');
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
            throw new AuthenticationError('There has been an error');
            }
            const token = signToken(user);
            return { token, user };
            }
    }








};

module.exports = resolvers;