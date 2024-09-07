import { DynamicModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import {PassportModule} from "@nestjs/passport"
import { LocalAuthGuard } from './local.auth.guard';
import { SessionSerializer } from './session.serializer.entities';
import { LocalStrategy } from './local.strategy';

@Module({})
export class AuthModule{
    static getProviders(){
       return [
        AuthService,
        LocalStrategy,
        SessionSerializer
       ] 
    }
    
    static getImports(){
        return [
            UsersModule,
            PassportModule.register({session:true,defaultStrategy: 'local'})
        ]
    }

    static forFeature():DynamicModule{
        return {
            module:AuthModule,
            imports:AuthModule.getImports(),
            providers:AuthModule.getProviders()
        }
    }

    static forRoot():DynamicModule{
        return {
            module:AuthModule,
            imports:AuthModule.getImports(),
            providers:AuthModule.getProviders()
        }
    }
}