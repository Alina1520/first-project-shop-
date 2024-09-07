import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BoilerPartsModule } from './boiler-parts/boiler-parts.module';
import { getConfigModule } from "./db/data-source.config"
import { FakeDataService } from './seeders/seeder.service';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { DatabaseModule } from './db';

@Module({
  imports: [
  DatabaseModule.forRoot(...getConfigModule.getDatabaseConfig()),
  UsersModule,
  AuthModule,
  BoilerPartsModule,
  ShoppingCartModule,
  ],
  providers:[FakeDataService],
})
export class AppModule {
  constructor(private readonly fakeDataService: FakeDataService) {
    this.fakeDataService.generateAndSaveFakeData(100); 
  }
}
