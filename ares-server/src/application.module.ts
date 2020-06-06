import { UsersModule } from 'src/modules/users/infrastructure/module/user.module';
import { HttpApiModule as ApiModule } from 'src/presentation/http/http-api.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        UsersModule,
        ApiModule
    ]
})
export class ApplicationModule {}