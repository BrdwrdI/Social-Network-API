const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,            
            unique: true,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: props => `${props.value} is not valid email address!`
            },
            required: [true, 'User email address required']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Type.ObjectId,
                ref: 'user'
            },
        ],
    },
    {
        //friendCount() that retrieves the length of the user's friends array field on query
    }
);

const User = model('user', userSchema);

module.exports = User;