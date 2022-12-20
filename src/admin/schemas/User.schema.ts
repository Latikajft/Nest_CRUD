import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    job: String,
    salary: Number
})