import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest{
    @ApiProperty({example:"Vlad"})
    username:string
    @ApiProperty({example:"12345"})
    password:string
}

export class LoginUserResponse{
    @ApiProperty({example:{user:{
        userId:1,
        username:"vlad",
        email:"vlad@gmail.com",
        password:"$2b$10$BRIEJzvzp/A0akF6chsiMOQDDvPt.YamNC84usIgYVA3dq1CKbU.6"
    }}})
    user:{
        userId:number,
        username:string,
        email:string,
        password:string
    }
    
    @ApiProperty({example:"Logged in"})
    msg:string
}
export class LogoutUserResponse {
    @ApiProperty({example:"session has ended"})
    msg:string
}
export class LogCheckResponse{
    @ApiProperty({example:{user:{
        userId:1,
        username:"vlad",
        email:"vlad@gmail.com"
    }}})
    user:{
        userId:number,
        username:string,
        email:string
    }

    }

    // {
    //     "username": "masha",
    //     "email": "masha@gmail.com",
    //     "password": "$2b$10$4yG9Qu4muIFn11aC7./nVett0HOZqN62XkJzfygFB1VjNBsW1vbqq",
    //     "id": 4,
    //     "createdAt": "2023-10-13T16:01:22.668Z",
    //     "updatedAt": "2023-10-13T16:01:22.668Z"
    // }    

    // {
    //     "username":"masha",
    //     "email":"masha@gmail.com",
    //     "password":"12345"
    // }
export class SignUpRequest{
    @ApiProperty({example:"Vlad"})
    username:string

    @ApiProperty({example:"vlad@gmail.com"})
    email:string

    @ApiProperty({example:"12345"})
    password:string

} 
export class SignUpResponse{
    @ApiProperty({example:"Vlad"})
    username:string

    @ApiProperty({example:"vlad@gmail.com"})
    email:string

    @ApiProperty({example:"12345"})
    password:string

    @ApiProperty({example:"1"})
    id:number
    
    @ApiProperty({example:"2023-10-13T16:01:22.668Z"})
    createdAt: Date

    @ApiProperty({example:"2023-10-13T16:01:22.668Z"})
    updatedAt: Date
    


}   
