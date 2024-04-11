import { Controller, Get } from '@nestjs/common';
import { version, name } from '../../../../package.json';
import { HttpSuccessCode } from '../dto/enums/success_enum';
import { ApiReponse } from '../dto/responses/api_responses';

const env = Bun.env.NODE_ENV || 'development';

export type THealthy = {
    message: string;
    name: string;
    environment: string;
    version: string;
};

const healthy: THealthy = {
    message: 'server running 👩‍💻',
    environment: env,
    name,
    version,
};

@Controller()
export class HealthyController {
    response: ApiReponse<THealthy>;

    constructor() {
        this.response = new ApiReponse<THealthy>(healthy, HttpSuccessCode.SUCCESSFUL);
    }

    @Get('')
    get() {
        return this.response;
    }

    @Get('/readiness')
    readiness() {
        return this.response;
    }

    @Get('/health')
    health() {
        return this.response;
    }
}
