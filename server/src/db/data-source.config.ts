import { BoilerParts } from "src/boiler-parts/entities/boiler.entity";
import { ShopCart } from "src/shopping-cart/entities/shop-cart.entity";
import { User } from "src/users/entities/user.entity";
import { DatabaseModule } from "./database.module";

const getDatabaseConfig = ():Parameters<(typeof DatabaseModule)['forRoot']>=> {
  return [{
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: '***',
    database: 'shop',
    synchronize: true,
      },
    [BoilerParts,User,ShopCart]
  ]
}

export const getConfigModule = {
  getDatabaseConfig
}
