import { Module } from '@nestjs/common';
import { UsersControllers } from './controllers';
import { USERS_PROVIDERS, UserServices } from '../app_business_rules';
import { createId } from '@/frameworks_drivers/tools';
import { UsersMongoRepository } from '@/frameworks_drivers/storages/mongo/implementations/users';
import { UserDAL, UsersScheme } from '@/frameworks_drivers/storages/mongo/models';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: UserDAL.name,
                schema: UsersScheme,
                collection: 'users',
            },
        ]),
    ],
    controllers: [UsersControllers],
    providers: [
        UserServices,
        {
            provide: USERS_PROVIDERS.REPO_MONGO,
            useClass: UsersMongoRepository,
        },
        {
            provide: USERS_PROVIDERS.TOOLS_CREATE_ID,
            useValue: createId,
        },
    ],
})
export class UsersModule {}
