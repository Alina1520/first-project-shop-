import { Injectable,Inject} from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import * as bcrypt from "bcrypt"
import { IUserRepository, USER_REPOSITORY } from './consts';


@Injectable()
export class UsersService {
    @Inject(USER_REPOSITORY)
    private readonly userRepository : IUserRepository

    async findOne(filter: {
        where:{
        id?: number;
        username?: string;
        email?: string;
        password?: string;
    }}): Promise<User | undefined> {
        const user = await this.userRepository.findOne({
            ...filter
        });
        return user
}

        async createUser(dto : UserDto): Promise <User | {warningMessage: string}>{
            const existedUsername  = await this.findOne({where:{username:dto.username}})
            const existedEmail  = await this.findOne({where:{email:dto.email}})

            if(existedEmail){
                return {warningMessage:'Email already exists'}
            }
            if(existedUsername){
                return {warningMessage:'Username already exists'}
            }

            const hashedPassword = await bcrypt.hash(dto.password,10);
           const user = this.userRepository.create({
                username:dto.username,
                email:dto.email,
                password:hashedPassword
            })
            return await this.userRepository.save(user);
        }
}
