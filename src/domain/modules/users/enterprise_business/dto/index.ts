export type TUserAPI = {
    _id: string;
    full_name: string;
    email: string;
};

export class UserAPI implements TUserAPI {
    _id: string;
    full_name: string;
    email: string;

    constructor(user: TUserAPI) {
        this._id = user._id;
        this.full_name = user.full_name;
        this.email = user.email;
    }
}
