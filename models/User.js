import mongoose from 'mongoose'

const userSchema = new mongoose.Schema (
    {
        name : {type: String, required: true},
        email : {type: String, required: true},
        password : {type: String, required: true},
        isAdmin : {type: Boolean, required: true, default: false} 
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.User || mongoose.model ('user', userSchema)

export default User