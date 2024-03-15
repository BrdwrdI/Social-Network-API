const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // getter method to format timestamp on query
            toJSON: {
                getters: true,
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
);

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;