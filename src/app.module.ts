import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthyController } from '@/domain/common/controllers/healthy_controller';
import { UsersModule } from './domain/modules/users/interface_adapters/users.module';
import { type Connection } from 'mongoose';

const URL_MONGO = Bun.env.URL_MONGO;

@Module({
    imports: [
        MongooseModule.forRoot(URL_MONGO as '', {
            connectionFactory: (connection: Connection) => {
                if (connection.readyState === 1) console.log('Mongoose Connected DB');
                if (connection.readyState === 99) console.log('Mongoose Error Connected');
                return connection;
            },
        }),
        UsersModule,
    ],
    controllers: [HealthyController],
})
export class AppModule {}
