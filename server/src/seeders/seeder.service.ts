import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BoilerParts } from '../boiler-parts/entities/boiler.entity';
import{faker} from '@faker-js/faker';

const boilerManufacturers = [
    'Ariston',
    'Chaffoteaux&Maury',
    'Baxi',
    'Bongioanni',
    'Saunier Duval',
    'Buderus',
    'Strategist',
    'Henry',
    'Northwest',
  ];

  const partsManufacturers = [
    'Azure',
    'Gloves',
    'Cambridgeshire',
    'Salmon',
    'Montana',
    'Sensor',
    'Lesly',
    'Radian',
    'Gasoline',
    'Croatia',
  ];

@Injectable()
export class FakeDataService {
  constructor(
    @InjectRepository(BoilerParts)
    private fakeDataRepository: Repository<BoilerParts>,
  ) {}

  async generateAndSaveFakeData(count: number) {
    const fakeDataArray = [];

    for (let i = 0; i < count; i++) {
      const boilerPart = new BoilerParts();
        boilerPart.boiler_manufacturer =
          boilerManufacturers[Math.floor(Math.random() * boilerManufacturers.length)];
        boilerPart.parts_manufacturer =
          partsManufacturers[Math.floor(Math.random() * partsManufacturers.length)];
        boilerPart.price = Math.floor(Math.random() * 10000);
        boilerPart.name = faker.lorem.sentence(2);
        boilerPart.description = faker.lorem.sentence(10);
        boilerPart.images = JSON.stringify(
          Array(7)
            .fill(0)
            .map(() => `${ faker.image.urlLoremFlickr({ category: 'technics' })}?random=${Math.floor(Math.random() * 100000* 100000* 100000* 100000* 100000* 100000)}`)
        );
        boilerPart.vendor_code = faker.internet.password();
        boilerPart.in_stock = Math.floor(Math.random() * 10);
        boilerPart.bestsellers = faker.datatype.boolean();
        boilerPart.new = faker.datatype.boolean();
        boilerPart.popularity = Math.floor(Math.random() * 1000);
        boilerPart.compatibility = faker.lorem.sentence(7);
      fakeDataArray.push(boilerPart);
    }

    await this.fakeDataRepository.save(fakeDataArray);
  }
}
