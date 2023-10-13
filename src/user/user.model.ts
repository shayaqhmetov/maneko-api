import * as mongoose from 'mongoose';
import { UserSchema } from "./user.schema";

export interface User extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
}

export const UserModel = mongoose.model<User>('User', UserSchema);
