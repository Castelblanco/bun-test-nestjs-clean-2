import { Inject, Injectable } from '@nestjs/common';
import { type TUsersRepository } from '../interface_adapters/repository';
import { type TUserDOM } from '../enterprise_business/entities';
import { buildCreate } from './services/create';
import { buildGetAll } from './services/get_all';

export type TDependencies = {
    repository: TUsersRepository;
    createId: () => string;
};

export const enum USERS_PROVIDERS {
    REPO_MONGO = 'repo:mongo',
    TOOLS_CREATE_ID = 'tools:create_id',
}

@Injectable()
export class UserServices {
    create: (user: TUserDOM) => Promise<TUserDOM>;
    getAll: () => Promise<TUserDOM[]>;

    constructor(
        @Inject(USERS_PROVIDERS.REPO_MONGO) repository: TUsersRepository,
        @Inject(USERS_PROVIDERS.TOOLS_CREATE_ID) createId: () => string,
    ) {
        const dependencies: TDependencies = {
            repository,
            createId,
        };

        this.create = buildCreate(dependencies);
        this.getAll = buildGetAll(dependencies);
    }
}
