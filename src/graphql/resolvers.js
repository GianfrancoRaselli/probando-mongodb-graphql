const User = require('../models/User');

module.exports = {

    Query: {
        async users() {
            return await User.find();
        },
        async user(_, { _id }) {
            return await User.findById(_id);
        }
    },

    Mutation: {
        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        }
    }

}