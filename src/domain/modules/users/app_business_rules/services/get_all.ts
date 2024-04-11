import { type TDependencies } from '..';
import { type TUserDOM } from '../../enterprise_business/entities';

export const buildGetAll = ({ repository }: TDependencies) => {
    const service = async (): Promise<TUserDOM[]> => {
        return await repository.getAll();
    };

    return service;
};
