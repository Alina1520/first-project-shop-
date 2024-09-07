import { Module,DynamicModule, Global } from '@nestjs/common';
import { BoilerPartsController } from './boiler-parts.controller';
import { BoilerPartsService } from './boiler-parts.service';

@Module({})
export class BoilerPartsModule {
  static forRoot():DynamicModule{
    return {
      module:BoilerPartsModule,
      controllers: [BoilerPartsController],
      providers: [BoilerPartsService],
      exports:[BoilerPartsService]
    }
  }
  static forFeature():DynamicModule{
    return {
      module:BoilerPartsModule,
      controllers: [BoilerPartsController],
      providers: [BoilerPartsService],
      exports:[BoilerPartsService]
    }
  }
}
