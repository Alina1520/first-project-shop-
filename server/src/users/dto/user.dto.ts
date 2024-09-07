import { ApiProperty, } from "@nestjs/swagger";
import { IsEmail,IsNotEmpty,IsString } from "class-validator";


export class UserDto {
    @ApiProperty({example:"vlad"})
    @IsNotEmpty()
    @IsString()
    readonly username:string;

   
    @ApiProperty({example:"12345"})
    @IsNotEmpty()
    readonly password:string;
    
    @ApiProperty({example:"vlad@gmail.com"})
    @IsEmail()
    @IsNotEmpty()
    readonly email:string;
}