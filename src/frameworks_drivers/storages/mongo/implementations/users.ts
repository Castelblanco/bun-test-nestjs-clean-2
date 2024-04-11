import { type TUserDOM } from '@/domain/modules/users/enterprise_business/entities';
import { type TUsersRepository } from '@/domain/modules/users/interface_adapters/repository';
import { UserDAL } from '../models/users';
import { StorageError } from '@/domain/common/dto/errors/storage_error';
import { UsersWrappers } from '../wrappers';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class UsersMongoRepository implements TUsersRepository {
    private readonly wrappers: UsersWrappers;

    constructor(@InjectModel(UserDAL.name) private readonly db: Model<UserDAL>) {
        this.wrappers = new UsersWrappers();
    }

    create = async (user: TUserDOM): Promise<TUserDOM> => {
        try {
            const newUser = await this.db.create(this.wrappers.domToDal(user));
            return this.wrappers.dalToDom(newUser);
        } catch (e) {
            throw new StorageError(e);
        }
    };

    getAll = async (): Promise<TUserDOM[]> => {
        try {
            const users = await this.db.find();
            return users.map(this.wrappers.dalToDom);
        } catch (e) {
            throw new StorageError(e);
        }
    };
}
