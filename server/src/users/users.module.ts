import { DynamicModule, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {PassportModule} from "@nestjs/passport"

@Module({})
export class UsersModule {
  static forRoot():DynamicModule{
    return {
      module:UsersModule,
      imports:[PassportModule.register({session:true})],
      controllers: [UsersController],
      providers: [UsersService],
      exports:[UsersService]
    }
  }
  static forFeature():DynamicModule{
    return {
      module:UsersModule,
      imports:[PassportModule.register({session:true})],
      controllers: [UsersController],
      providers: [UsersService],
      exports:[UsersService]
    }
  }
}
