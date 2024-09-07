
import { Repository } from "typeorm"
import { BoilerParts } from "../entities/boiler.entity"

export const BOILER_PARTS_REPOSITORY = Symbol('BOILER_PARTS_REPOSITORY')

export type IBoilerPartsRepository = Repository<BoilerParts>