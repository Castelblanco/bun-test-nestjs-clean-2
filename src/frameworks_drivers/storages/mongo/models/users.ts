import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type HydratedDocument } from 'mongoose';

export type TUserDAL = HydratedDocument<UserDAL>;

@Schema({
    versionKey: false,
    _id: false,
})
export class UserDAL {
    @Prop()
    _id: string;

    @Prop()
    full_name: string;

    @Prop()
    email: string;

    constructor(user: TUserDAL) {
        this._id = user._id;
        this.full_name = user.full_name;
        this.email = user.email;
    }
}

export const UsersScheme = SchemaFactory.createForClass(UserDAL);
