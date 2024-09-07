import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserDto } from "src/users/dto/user.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
   constructor(private usersService:UsersService){}
   async validateUser(username:string, password:string){
    const user = await this.usersService.findOne({where:{username}})
    if(!user){
        return {warningMessage:`Username ${username} doesnt exist`}
    }
    const pass = await bcrypt.compare(password,user.password)
    if(!pass){
        throw new UnauthorizedException('Invalid credentials')
    }
     return user
   }
}