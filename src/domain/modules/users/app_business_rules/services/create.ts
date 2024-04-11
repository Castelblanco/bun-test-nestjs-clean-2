import { type TDependencies } from '..';
import { type TUserDOM } from '../../enterprise_business/entities';

export const buildCreate = ({ repository, createId }: TDependencies) => {
    const service = async (user: TUserDOM): Promise<TUserDOM> => {
        user.id = createId();
        return await repository.create(user);
    };

    return service;
};
