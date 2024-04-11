import { type TUserDOM } from '../../enterprise_business/entities';

export type TUsersRepository = {
    create: (user: TUserDOM) => Promise<TUserDOM>;
    getAll: () => Promise<TUserDOM[]>;
};
