import { INestApplication } from "@nestjs/common";
import{Test,TestingModule} from "@nestjs/testing"
import { Module } from "@nestjs/core/injector/module"; 
import * as bcrypt from 'bcrypt';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { UsersController } from "src/users/users.controller";

const mockUserDto = {
    username:'Jhon',
    email:"jhon@gmail.com",
    password:"12345"
};
const mockUser={
    createUser: jest.fn((dto)=>{
       return{
        ...dto
       } 
        }),
        

}

describe('Users controller',()=>{
    let app : INestApplication
    let controller: UsersController

    beforeEach(async ()=>{
        const testModule :TestingModule = await Test.createTestingModule({
                providers:[UsersService],
                controllers:[UsersController]
        }).overrideProvider(UsersService).useValue(mockUser).compile()

        controller = testModule.get<UsersController>(UsersController)
    })

    it('should create a user',()=>{
        expect(controller.createUser(mockUserDto)).toEqual(mockUserDto)
    })
    it('should to be defined',()=>{
        expect(controller).toBeDefined()
    })

    // afterEach(async()=>{
    //     await 
    // })

   
    
    // beforeEach(async()=>{    
    //     const user = new User()
    //     const hashedPassword = await bcrypt.hash(mockidUser.password,10)

    //     user.password = hashedPassword
    //     user.username = mockidUser.username
    //     user.email = mockidUser.email
    //     return userRepository.save(user);
    // })
    // it('should create user',async ()=>{
    //     const newUser = {
    //             username: 'Test',
    //             email: 'test@gmail.com',
    //             password: 'test123',
    //           };

    //           const response = await request(app.getHttpServer())
    //           .post("users/signup")
    //           .send(newUser)

    //           const passwordValid = await bcrypt.compare(newUser.password,response.body.password)
               
    //           expect(response.body.username).toBe(newUser)
    //           expect(response.body.email).toBe(newUser)
    //           expect(response.body.password).toBe(newUser)
    
    //         })
    //         afterEach(async()=>{
    //             const username = await userRepository.findOne({where:{username:"Test"}})
    //             await userRepository.remove(username)
    //         })
})