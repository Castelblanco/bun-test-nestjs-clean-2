import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { UsersMappers } from '../mappers';
import { UserServices } from '../../app_business_rules';
import { type TUserAPI } from '../../enterprise_business/dto';
import { ListResponse } from '@/domain/common/dto/responses/list_responses';
import { HttpSuccessCode } from '@/domain/common/dto/enums/success_enum';
import { HttpErrorCode } from '@/domain/common/dto/enums/errors_enum';
import { ApiReponse } from '@/domain/common/dto/responses/api_responses';

@Controller('users')
export class UsersControllers {
    mappers: UsersMappers;

    constructor(private readonly services: UserServices) {
        this.mappers = new UsersMappers();
    }

    @Get('')
    async getAll(): Promise<ListResponse<TUserAPI>> {
        try {
            const users = await this.services.getAll();

            return new ListResponse(
                users.map(this.mappers.domToApi),
                users.length,
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (error) {
            throw new HttpException(error as string, HttpErrorCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('')
    async create(@Body() body: TUserAPI): Promise<ApiReponse<TUserAPI>> {
        try {
            const user = await this.services.create(this.mappers.apiToDom(body));
            return new ApiReponse(this.mappers.domToApi(user), HttpSuccessCode.CREATED);
        } catch (error) {
            throw new HttpException(error as string, HttpErrorCode.INTERNAL_SERVER_ERROR);
        }
    }
}
