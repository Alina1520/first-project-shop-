import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoilerParts } from './entities/boiler.entity';
import {Repository,FindManyOptions,Like} from "typeorm"
import { BOILER_PARTS_REPOSITORY, IBoilerPartsRepository } from './const';
import { IBoilerPartsQuery } from './types';


@Injectable()
export class BoilerPartsService {
    @Inject(BOILER_PARTS_REPOSITORY)
    private readonly boilerParts:IBoilerPartsRepository

    async paginatedAndFilter(query:IBoilerPartsQuery):Promise<{count:number; rows:BoilerParts[]}>{
        const limit = +query.limit
        const offset = +query.offset*20 //number of page
        const options :FindManyOptions<BoilerParts>={
            take: limit, 
            skip: offset
        }
        const [boilerParts, count] = await this.boilerParts.findAndCount(options);
        return { count, rows: boilerParts };
    }
    async bestsellers():Promise<{count:number; rows:BoilerParts[]}>{
        const [boilerParts, count] = await this.boilerParts.findAndCount({where:{bestsellers:true}});
        return { count, rows: boilerParts };
    }
    async new():Promise<{count:number; rows:BoilerParts[]}>{
        const [boilerParts, count] = await this.boilerParts.findAndCount({where:{new:true}});
        return { count, rows: boilerParts };
    }
    async findOne(id:number):Promise<BoilerParts>{
        return this.boilerParts.findOne({where:{id}})
    }
    async findOneByName(name:string):Promise<BoilerParts>{
        return this.boilerParts.findOne({where:{name}})
    }
    async searchByString(str:string):Promise<{count:number; rows:BoilerParts[]}>{
      const [rows, count] = await this.boilerParts.findAndCount({
      where: { name: Like(`%${str}%`) },
      take: 20,
    });
    return {count,rows}
    }
}
