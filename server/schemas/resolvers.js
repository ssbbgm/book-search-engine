//import Book and User models
const { Book, User } = require('../models');
//import error module from Apollo
const { AuthenticationError } = require('apollo-server-express');
//import sign token from auth
const { signToken } = require('../utils/auth');


const resolvers = {












};

module.exports = resolvers;