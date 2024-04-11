export type TUserDOM = {
    id: string;
    fullName: string;
    email: string;
};

export class UserDOM implements TUserDOM {
    id: string;
    fullName: string;
    email: string;

    constructor(user: TUserDOM) {
        this.id = user.id;
        this.fullName = user.fullName;
        this.email = user.email;
    }
}
