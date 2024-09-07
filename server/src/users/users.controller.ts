import { Controller,Post,UseGuards,Body,Get,HttpCode,HttpStatus,Header,Request } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { LogCheckResponse, LoginUserRequest, LoginUserResponse, LogoutUserResponse, SignUpRequest, SignUpResponse } from './types';

@Controller('users')
export class UsersController {
    constructor(private usersService : UsersService){}

    @Post('/signup')
    @ApiBody({type:SignUpRequest})
    @ApiOkResponse({type:SignUpResponse})
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type','application/json')
    createUser(@Body() dto:UserDto){
       return this.usersService.createUser(dto)
    }

    @Post('/login')
    @ApiBody({type: LoginUserRequest})
    @ApiOkResponse({type:LoginUserResponse})
    @HttpCode(HttpStatus.OK)
    @Header('Content-type','application/json')
    @UseGuards(LocalAuthGuard)
    login(@Request() req){
       return { user :req.user, msg:"logged in"}
    }

    @Get('/login-check')
    @ApiOkResponse({type:LogCheckResponse})
    @UseGuards(AuthenticatedGuard)
    loginCheck(@Request() req){
        return req.user
    }
    @Get('/logout')
    @ApiOkResponse({type:LogoutUserResponse})
    logout(@Request() req){
       req.session.destroy();
       return {msg:"session has ended"}
    }
}
