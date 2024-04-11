import { type TMappers } from '@/domain/common/base/imapper_api';
import { type TUserDOM, UserDOM } from '../../enterprise_business/entities';
import { type TUserAPI, UserAPI } from '../../enterprise_business/dto';

export class UsersMappers implements TMappers<TUserDOM, TUserAPI> {
    apiToDom = (item: TUserAPI): TUserDOM => {
        return new UserDOM({
            id: item._id,
            fullName: item.full_name,
            email: item.email,
        });
    };

    domToApi = (item: TUserDOM): TUserAPI => {
        return new UserAPI({
            _id: item.id,
            full_name: item.fullName,
            email: item.email,
        });
    };
}
