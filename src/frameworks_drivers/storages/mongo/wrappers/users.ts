import { type TWrappers } from '@/domain/common/base/imapper_api';
import {
    type TUserDOM,
    UserDOM,
} from '@/domain/modules/users/enterprise_business/entities';
import { type UserDAL } from '../models';

export class UsersWrappers implements TWrappers<TUserDOM, UserDAL> {
    dalToDom = (item: UserDAL): TUserDOM => {
        return new UserDOM({
            id: item._id,
            fullName: item.full_name,
            email: item.email,
        });
    };

    domToDal = (item: TUserDOM): UserDAL => {
        return {
            _id: item.id,
            full_name: item.fullName,
            email: item.email,
        };
    };
}
