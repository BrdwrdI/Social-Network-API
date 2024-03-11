const { Schema, model } = require('mongoose');

const thoughSchema = new Schema(
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
        },
        username: {
            
        }
    }
)