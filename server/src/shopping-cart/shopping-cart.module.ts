import { DynamicModule, Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopCart } from './entities/shop-cart.entity';
import { ShoppingCartController } from './shopping-cart.controller';
import { UsersModule } from 'src/users/users.module';
import { BoilerPartsModule } from 'src/boiler-parts/boiler-parts.module';

@Module({})
export class ShoppingCartModule {
  static forRoot():DynamicModule{
    return {
      module:ShoppingCartModule,
      imports:[UsersModule,BoilerPartsModule.forFeature()],
      providers: [ShoppingCartService],
      exports:[ShoppingCartService],
      controllers: [ShoppingCartController]
    }
  }

  static forFeature():DynamicModule{
    return {
      module:ShoppingCartModule,
      imports:[UsersModule.forFeature(),BoilerPartsModule.forFeature()],
      providers: [ShoppingCartService],
      exports:[ShoppingCartService],
      controllers: [ShoppingCartController]
    }
  }
}
