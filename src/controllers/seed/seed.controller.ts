import { Controller, Get } from '@nestjs/common';

@Controller('seed')
export class SeedController {

    @Get('test')
    test(): string  {
        return 'test';
    }
}
