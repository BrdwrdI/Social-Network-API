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
                type: Schema.Type.ObjectId,
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
);

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;