import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

export const USER_REPOSITORY = Symbol("USER_REPOSITORY")
export type IUserRepository = Repository<User>