import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AdminController } from './admin/admin.controller';
// import { AdminService } from './admin/admin.service';

import config from './config/keys';
import { AdminModule } from './admin/admin.modules';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AdminModule,UserModule,AuthModule, MongooseModule.forRoot(config.monfoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}